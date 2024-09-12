import { configureStore } from "@reduxjs/toolkit";
import tokenPriceSlice from "./tokenprice.slice/tokenpriceslice";
export const store = configureStore({
    reducer:{
tokenPrices: tokenPriceSlice 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})