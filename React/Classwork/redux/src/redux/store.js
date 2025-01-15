import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import productSlice from "./counterSlice";

const store = configureStore({
    reducer:{
        counterState : counterSlice.reducer,
    }
});

export default store