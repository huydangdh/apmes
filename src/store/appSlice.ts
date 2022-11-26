import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from ".";
import authService from '../services/authService';

// Define a type for the slice state
type appModel = {
    isBusy: boolean,
}

// Define the initial state using that type
const initState: appModel = {
    isBusy: false
}

export const appSlice = createSlice({
    name: 'app_lhf',
    initialState: initState,
    reducers: {
        setIsBusy: (state, action) => {
            state.isBusy = action.payload;
        },
        doTestLogout: state => {

        },
    },

})

export const { setIsBusy } = appSlice.actions

export const appIsBusy = (state: RootState) => state.appStore.isBusy

export default appSlice.reducer;