// Node Modules
import diskusage from 'electron-diskusage';
import * as drivelist from 'electron-drivelist';
import _ from 'lodash';

// System
import FileSizes, { FileSize } from './filesizes';


/**
 * Models properties of a disk (mount label,
 * free space, total space, and usage %)
 */
export type DiskData = {
    label: string;
    free: FileSize;
    total: FileSize;
    usage: number;
};

/**
 * Manages the retrieval of disk information
 */
export default class DiskManager {
    /**
     * Goes through all the mounted disks 
     * and calculates the disk usage for each one.
     */
    public static getDiskData = async () => {
        const diskData: DiskData[] = [];

        // Get a list of drives mounted on this system
        const driveList = await drivelist.list();

        const drives = _.flatMap(driveList, (drive) => {
            return _.filter(drive.mountpoints, (mountPoint) => {
                // Ignore boot and swap partitions on GNU/Linux
                return  !(_.startsWith(mountPoint.path, '/boot') ||
                                        mountPoint.path === '[SWAP]')
            })
        })

        // Build an array of disk usage check promises to await on
        const checks = _.map(drives, async (drive) => {
            // Get the available and total space on the drive
            const data = await diskusage.check(drive.path);

            // Add the data to the diskData array
            diskData.push({
                label: drive.path,
                free: FileSizes.bytesToSize(data.available, true),
                total: FileSizes.bytesToSize(data.total, true),
                usage: (data.available / data.total) * 100,
            });
        });

        await Promise.all(checks);

        return diskData;
    };
}
