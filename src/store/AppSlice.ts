import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit"


export type AppModel = {
    app_busy: boolean
}
const initialState: AppModel = {
    app_busy: false
}

type appReducers= {
    setAppIsBusy: CaseReducer<AppModel, { payload: boolean; type: string; }>
}


const AppSlice = createSlice<AppModel, appReducers, "app_slice">({
    initialState,
    name: "app_slice",
    reducers :{
        setAppIsBusy: (state, action)=>{
           state.app_busy = action.payload;
        }
    }
})

// actions

export const { setAppIsBusy } = AppSlice.actions;
export default AppSlice;
