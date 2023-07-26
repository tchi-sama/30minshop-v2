'use client';

import { createSlice } from "@reduxjs/toolkit"

export interface toolsState {
    toolSelected:number;
    showLeftbar:boolean;
    showRightbar:boolean;
}

const initialState : toolsState = {
    toolSelected:0,
    showLeftbar:false,
    showRightbar:false,
}

export const toolsSlice = createSlice({
    name :"tools",
    initialState,
    reducers:{
        setTool:(state,action)=>{
            state.toolSelected= action.payload
            state.showLeftbar = true
        },
        closeLeftBar:(state)=>{state.showLeftbar=false},
        openLeftBar:(state)=>{state.showLeftbar=true},
        closeRightBar:(state)=>{state.showRightbar=false},
        openRightBar:(state)=>{state.showRightbar=true},
    }
})

export const {
    setTool,
    closeLeftBar,
    openLeftBar,
    closeRightBar,
    openRightBar
} = toolsSlice.actions;
export default toolsSlice.reducer;