// Node Modules
import os from 'os';

/**
 * Used for file size conversions and related behavior
 */
export default class FileSizes {
    private static bytesTable: Record<string, number> = {
        'TiB': 1.1e+12,
        'GiB': 1.074e+9,
        'MiB': 1.049e+6,
        'KiB': 1024,
        'TB': 1e+12,
        'GB': 1e+9,
        'MB': 1e+6,
        'KB': 1000,
    };

    private static osUnits: string[] = (os.platform() === 'win32') ? 
                                                ['KiB', 'MiB', 'GiB', 'TiB'] :
                                                ['KB', 'MB', 'GB', 'TB'];

    /**
     * Converts a number of bytes to a different storage unit
     * 
     * @param bytes
     */
    public static convertBytes = (bytes: number, unit: string,
                             round: boolean): number => {

        const convertedValue = bytes / FileSizes.bytesTable[unit];

        if (round) {
            return Math.round((convertedValue + Number.EPSILON) * 100) / 100;
        } else {
            return convertedValue;
        }
    };

    /**
     * Converts a number of bytes to a string representing the size
     * based on the most appropriate size unit (bytes, KiB, MiB, or GiB)
     * 
     * @param bytes
     */
    public static bytesToString = (bytes: number, round: boolean): string => {
        for (let i = FileSizes.osUnits.length - 1; i >= 0; i--) {
            const unit = FileSizes.osUnits[i];

            if (bytes >= FileSizes.bytesTable[unit]) {
                return `${FileSizes.convertBytes(bytes, unit, round)} ${unit}`;
            }
        }

        return `${bytes} B`;
    };
}