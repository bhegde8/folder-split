// Node Modules
import diskusage from 'diskusage';
import * as drivelist from 'electron-drivelist';
import _ from 'lodash';


/**
 * Models properties of a disk (mount label,
 * free space, total space, and usage %)
 */
export type DiskData = {
    label: string;
    free: number;
    total: number;
    usage: number;
};

/**
 * Converts bytes to gibibytes
 * 
 * @param bytes
 */
export const bytesToGiB = (bytes: number): number => {
    return Math.round(((bytes / 1.074e+9) + Number.EPSILON) * 100) / 100;
};

/**
 * Manages the retrieval of disk information
 */
export default abstract class DiskManager {
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
                free: bytesToGiB(data.available),
                total: bytesToGiB(data.total),
                usage: (data.available / data.total) * 100,
            });
        });

        await Promise.all(checks);

        return diskData;
    };
}
