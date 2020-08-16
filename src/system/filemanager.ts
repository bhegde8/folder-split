// Node Modules
import fs from 'fs';
import _ from 'lodash';
import path from 'path';

// System
import FileSizes, { FileSize } from './filesizes';
import { DiskData } from './diskmanager';


/**
 * Models properties of a file or folder
 */
export type File = {
    isDirectory: boolean; // whether this is a folder or not
    depth?: number; // recursion depth level (0+)
    name: string; // the name of the file/folder (not the full path)
    extension?: string; // the file extension (could be used for showing icons)
    size: FileSize; // data about the size of the file/folder
    children?: File[]; // child files/folders
    sourcePath: string; // the full path of the file/folder on the source drive
    destPath: string; // the new full path on the destination drive
    destDrive: string; // the drive label of the destination drive
};

/**
 * Manages the retrieval of directory tree information
 */
export default class FileManager {

    /**
     * Recursively builds and returns a directory tree of File objects
     * for the given path
     * 
     * (Note: inspired by https://github.com/mihneadb/node-directory-tree)
     * 
     * @param filePath 
     * @param drive 
     */
    private static buildTreeRec = (filePath: string, drive: string,
                                   depth: number): File => {

        // The base name of the file/folder
        const fileName = path.basename(filePath);

        // Stats about the file/folder: used to determine if it is a file
        // or folder, and get the size in bytes
        const fileStats = fs.statSync(filePath);
        
        if (fileStats.isDirectory()) {

            // Create an array of all the files and folders contained
            // within this directory
            const children = _.map(fs.readdirSync(filePath), (child) => {
                const childPath = path.join(filePath, child);

                return FileManager.buildTreeRec(childPath, drive, depth + 1);
            });

            // Remove any null files that might have been returned
            _.remove(children, (child) => !child);

            // Sum the total number of bytes of all the children
            const totalBytes = _.reduce(children, (sum, child) => {
                return sum + child.size.bytes;
            }, 0);

            // Convert the bytes to a FileSize format
            const totalSize = FileSizes.bytesToSize(totalBytes, true);

            // Return a File object representing this directory
            return {
                isDirectory: true,
                depth,
                name: fileName,
                size: totalSize,
                children,
                sourcePath: filePath,
                destPath: filePath,
                destDrive: drive,
            };
        } else if (fileStats.isFile()) {
            // Return a File object representing this file
            return {
                isDirectory: false,
                depth,
                name: fileName,
                extension: _.toLower(path.extname(filePath)),
                size: FileSizes.bytesToSize(fileStats.size, true),
                sourcePath: filePath,
                destPath: filePath,
                destDrive: drive,
            };
        } else {
            // isBlockDevice?
            // isCharacterDevice?
            // isFIFO?
            // isSocket?
            // isSymbolicLink? --> this might be important in the future!
            return null;
        }   
    }

    /**
     * Builds and returns a directory tree of File objects for the given path
     * 
     * @param path 
     * @param disksData 
     */
    public static buildTree = (path: string, disksData: DiskData[]): File => {
        // Find the drive label that the files currently sit on
        const destDrive = _.find(disksData, (diskData) => {
            return _.startsWith(path, diskData.label);
        }).label;

        return FileManager.buildTreeRec(path, destDrive, 0);
    }
}
