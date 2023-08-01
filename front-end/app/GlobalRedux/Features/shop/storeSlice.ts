"use client";

import { pageType, storeState } from "@/app/types/storeType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: storeState = {
  store: {
    general: {
      user: "120908440398t5",
      name: "tchisama",
    },
    pages: [],
  },
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStore: (state,action:PayloadAction<pageType|any>) => {
      state.store.pages = [action.payload];
    },
  },
});

export const {setStore} = storeSlice.actions;
export default storeSlice.reducer;
