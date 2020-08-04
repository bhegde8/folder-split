// Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch, RootState } from '../store';

// System
import DiskManager, { DiskData } from '../../system/diskManager';


/**
 * Type for the state of the disksSlice
 */
type DisksSliceState = {
    disksData: DiskData[];
};

export const disksSlice = createSlice({
    name: 'disks',
    initialState: { disksData: [] } as DisksSliceState,
    reducers: {
        setDisks: (state, action: PayloadAction<DiskData[]>) => {
            state.disksData = action.payload;
        },
    },
});

/**
 * Fetches the disk data from the DiskManager
 */
export const refreshDiskData = (): AppThunk => async (dispatch: AppDispatch) => {
    try {
        const data: DiskData[] = await DiskManager.getDiskData();

        // Replace the state with the new disk data
        dispatch(disksSlice.actions.setDisks(await DiskManager.getDiskData()));
    } catch (error) {
        console.error('Failed to refresh disk data', error);
    }
};

/**
 * Selector for the disk data
 * 
 * @param state
 */
export const selectDisks = (state: RootState) => state.disks.disksData;

export default disksSlice.reducer;
