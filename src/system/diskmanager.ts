// Node Modules
import diskusage from 'diskusage';
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
    private static diskData: DiskData[] = [];

    /**
     * Goes through all the mounted disks 
     * and calculates the disk usage for each one.
     */
    public static calcDiskData = async () => {
        // Get a list of drives mounted on the system
        // TODO: use a different module to get the disks instead of hardcoded
        // drives
        const drives = [{
            mounted: 'C:',
        }, {
            mounted: 'D:',
        }]

        DiskManager.diskData = [];

        // Build an array of disk usage check promises to await on
        const checks = _.map(drives, async (drive) => {
            // Get the available and total space on the drive
            const data = await diskusage.check(drive.mounted);
            
            // Add the data to the diskData array
            DiskManager.diskData.push({
                label: drive.mounted,
                free: bytesToGiB(data.available),
                total: bytesToGiB(data.total),
                usage: (data.available / data.total) * 100,
            });
        });

        await Promise.all(checks);
    };

    /**
     * Returns the disk data, calculating it if it hasn't
     * already been calculated.
     */
    public static getDiskData = async () => {
        if (_.size(DiskManager.diskData) === 0) {
            await DiskManager.calcDiskData();
        }

        return DiskManager.diskData;        
    }
}
