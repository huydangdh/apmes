
import { configureStore, createSlice,SliceCaseReducers, CaseReducer,PayloadAction } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import UserSlice from "./userStore";

/******************************* APP_STORE */

const AppStore = configureStore({
    reducer : {
      users : UserSlice.reducer,
      appState: AppSlice.reducer
    }
}) 

export type AppRootState = ReturnType<typeof AppStore.getState>
export type AppDispatch = typeof AppStore.dispatch;

export default AppStore;