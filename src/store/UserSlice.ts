import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState, useAppDispatch } from ".";
import authService from '../services/authService';
import { setIsBusy } from './appSlice';

// Define a type for the slice state
type UserModel = {
    card_no: string,
    username: string,
    permission: string,
    isAuth: boolean
}

// Define the initial state using that type
const initUser: UserModel = {
    card_no: 'VN000000',
    username: 'USER_1',
    permission: '',
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user_lhf',
    initialState: initUser,
    reducers: {
        doTestLogin: state => {

        },
        doTestLogout: state => {

        },
    },
    extraReducers(builder) {
        // builder.addCase(authService.doLogin_test.pending, (state, action) => {
         

        // }),
        // builder.addCase(authService.doLogin_test.fulfilled, (state, action) => {

        // })
    }
})

export const { doTestLogin, doTestLogout } = userSlice.actions

export const selectUserStore = (state: RootState) => state.userStore

export default userSlice.reducer;