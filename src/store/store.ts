// Redux
import { useDispatch } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import disksReducer from './slices/disksSlice';


const store = configureStore({
    reducer: {
        disks: disksReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

// Used for typed thunks for asynchronous actions
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

// Used for typed dispatch()es
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
