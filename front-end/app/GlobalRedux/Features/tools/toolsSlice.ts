'use client';

import { createSlice } from "@reduxjs/toolkit"

export interface toolsState {
    toolSelected:number
}

const initialState : toolsState = {
    toolSelected:2
}

export const toolsSlice = createSlice({
    name :"tools",
    initialState,
    reducers:{
        setTool:(state,action)=>{
            state.toolSelected= action.payload
        }
    }
})

export const {setTool} = toolsSlice.actions;
export default toolsSlice.reducer;