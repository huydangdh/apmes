
/******************************* USER_STORE */

import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "firebase/auth"

export type UserModel = {
    emp_no: string,
    emp_name: string | null,
    emp_permission: string,
    emp_role: string,
    emp_authed: boolean,
    refreshToken: string
}

const initialState: UserModel = {
    emp_no :"<NULL>",
    emp_name: "default",
    emp_permission: "",
    emp_role: "",
    emp_authed: false,
    refreshToken: ""
}
type userReducers= {
    setUser: CaseReducer<UserModel, { payload: UserModel; type: string; }>
}

const UserSlice = createSlice<UserModel, userReducers, "user_slice">({
    initialState,
    name: "user_slice",
    reducers :{
        setUser: (state, action)=>{
            return {...state, ...action.payload}
        }
    }
})

// actions

export const { setUser } = UserSlice.actions;
export default UserSlice;