import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TRootState } from 'store';
import { User } from './types';


const initialState = {
    isAuthed: false
} as User


const userSlice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers:{
        doLogin: (state: User, payload: PayloadAction<string>)=>{
            state.isAuthed = true;
        },
        doLogout: (state: User)=>{
            state.isAuthed = false;
        }
    }
})


// userSelector 
export const userSelector = (state: TRootState) => state.userStore

// actions
export const { doLogin, doLogout } = userSlice.actions

// reducer
export default userSlice.reducer;