import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./userSlice";

const store = configureStore({
    reducer:{
        userStore: userReducer
    }
})

// export Rootstate 

export type TRootState = ReturnType<typeof store.getState>

// export type appdispatch

export type TAppDispatch = typeof store.dispatch;
export const useAppDispatch: () => TAppDispatch = useDispatch // Export a hook that can be reused to resolve types


export default store;