import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice1"

export const Store = configureStore({
    reducer:{
        Slice_1:cartReducer
    }
})