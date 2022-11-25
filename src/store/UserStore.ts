import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from ".";

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
            state.isAuth = true;
        },
        doTestLogout: state => {
            state.isAuth = false;
        }
    }
})

export const { doTestLogin, doTestLogout } = userSlice.actions


export default userSlice.reducer;