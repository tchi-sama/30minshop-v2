'use client';

import { configureStore } from "@reduxjs/toolkit"
import toolsReducer from "./Features/tools/toolsSlice"
import storeReducer from "./Features/shop/storeSlice"

export const store = configureStore({
    reducer:{
        tools:toolsReducer,
        store:storeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;