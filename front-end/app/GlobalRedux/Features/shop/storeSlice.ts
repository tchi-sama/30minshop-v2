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
                        type:"header",
                        properties:{
                        }
                    },
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

export const storeSlice = createSlice({
    name :"store",
    initialState,
    reducers:{
    }
})

export const {} = storeSlice.actions;
export default storeSlice.reducer;