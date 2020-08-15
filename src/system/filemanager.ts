// System
import FileSizes from './filesizes';

/**
 * Models properties of a file or folder
 */
export type File = {
    isDirectory: boolean; // whether this is a folder or not
    name: string; // the name of the file/folder (not the full path)
    extension?: string; // the file extension (could be used for icons)
    bytes: number; // the size of the file/folder in bytes
    sourcePath: string; // the full path of the file/folder on the source drive
    destPath: string; // the new full path on the destination drive
    destDrive: string; // the drive label of the destination drive
};

/**
 * Manages the retrieval of directory tree information
 */
export default abstract class FileManager {

}