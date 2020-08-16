// Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch, RootState } from '../store';

// System
import { DiskData } from '../../system/diskmanager';
import FileManager, { File } from '../../system/filemanager';


type TreeSliceState = {
    root: File;
    rootPath: string;
};

export const treeSlice = createSlice({
    name: 'tree',
    initialState: {
        root: null,
        rootPath: '(Open a Folder)',
    } as TreeSliceState,
    reducers: {
        setRoot: (state, action: PayloadAction<File>) => {
            state.rootPath = action.payload.sourcePath;
            state.root = action.payload;
        },
    },
});

/**
 * Changes the directory tree
 */
export const changeDirectory = (path: string, disks: DiskData[]): AppThunk => (
    dispatch: AppDispatch
) => {

    const root = FileManager.buildTree(path, disks);

    // Replace the state with the new directory tree
    dispatch(treeSlice.actions.setRoot(root));
};

/**
 * Selector for the file tree
 * 
 * @param state
 */
export const selectTree = (state: RootState) => state.tree.root;

/**
 * Selector for the path to the root folder
 * 
 * @param state
 */
export const selectRootPath = (state: RootState) => state.tree.rootPath;

export default treeSlice.reducer;
