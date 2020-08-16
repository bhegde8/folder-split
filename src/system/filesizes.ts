// Node Modules
import os from 'os';


/**
 * Models a file size
 */
export type FileSize = {
    bytes: number; // the size of the file/folder in bytes
    val: number; // the size of the file/folder in an appropriate unit
    unit: string; // the appropriate unit
};

/**
 * Used for file size conversions and related behavior
 */
export default class FileSizes {
    /**
     * Maps storage units to their number of bytes
     */
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

    /**
     * Used for deciding on string representations of byte values. Use
     * binary units for Windows and decimal units elsewhere.
     */
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
     * Converts a number of bytes to an object representing the size
     * based on the most appropriate size unit (bytes, KiB, MiB, or GiB)
     * 
     * @param bytes
     */
    public static bytesToSize = (bytes: number, round: boolean): FileSize => {
        for (let i = FileSizes.osUnits.length - 1; i >= 0; i--) {
            const unit = FileSizes.osUnits[i];

            if (bytes >= FileSizes.bytesTable[unit]) {
                return {
                    bytes: bytes,
                    val: FileSizes.convertBytes(bytes, unit, round),
                    unit,
                };
            }
        }

        return {
            bytes: bytes,
            val: bytes,
            unit: 'B',
        };
    };
}