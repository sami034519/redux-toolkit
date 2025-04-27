import { configureStore } from "@reduxjs/toolkit";
import  counterslice  from "../Slices/Counter";
import userslice from "../Slices/username"
export const store=configureStore({
    reducer:{
        todos:counterslice,
        username:userslice
    }
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;