import diskInfo from 'node-disk-info';
import diskusage from 'diskusage';
import _ from 'lodash';

export type DiskData = {
    label: string;
    free: number;
    total: number;
    usage: number;
};

export default abstract class DiskManager {
    private static diskData: DiskData[] = [];

    public static calcDiskData = async () => {
        // Get a list of drives mounted on the system
        const drives = await diskInfo.getDiskInfo();

        DiskManager.diskData = [];

        // Build an array of disk usage check promises to await on
        const checks = _.map(drives, async (drive) => {
            // Get the available and total space on the drive
            const data = await diskusage.check(drive.mounted);
            
            // Add the data to the diskData array
            DiskManager.diskData.push({
                label: drive.mounted,
                free: bytesToGB(data.available),
                total: bytesToGB(data.total),
                usage: (data.available / data.total) * 100,
            });
        });

        await Promise.all(checks);
    };

    public static getDiskData = async () => {
        if (_.size(DiskManager.diskData) === 0) {
            await DiskManager.calcDiskData();
        }

        return DiskManager.diskData;        
    }
};

export const bytesToGB = (bytes: number): number => {
    return Math.round(((bytes / 1e+9) + Number.EPSILON) * 100) / 100;
};
