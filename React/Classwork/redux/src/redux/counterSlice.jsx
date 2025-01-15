import {createSlice} from "@reduxjs/toolkit"

const counterSlice =  createSlice({
    name:"CounterSlice",
    initialState : {
        count: 100,
        msg : "Hello"
    }
});

export default counterSlice;