import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";
import moviesSlice from "./moviesSlice";

const store = configureStore({
    reducer:{
        paginationState:paginationSlice.reducer,
        moviesState:moviesSlice.reducer,
    }
});

export default store;