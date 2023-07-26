'use client';

import { storeState } from "@/app/types/storeType";
import { createSlice } from "@reduxjs/toolkit"


const initialState : storeState = {
    store:{
        general:{
            user:"120908440398t5",
            name:"tchisama"
        },
        pages:[
            {
                sections:[
                    {
                        type:"hero",
                        properties:{
                        }
                    },
                ]
            }
        ]
    },
}

export const toolsSlice = createSlice({
    name :"store",
    initialState,
    reducers:{
    }
})

export const {} = toolsSlice.actions;
export default toolsSlice.reducer;