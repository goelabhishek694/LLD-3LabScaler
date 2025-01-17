import {createSlice} from "@reduxjs/toolkit"

const counterSlice =  createSlice({
    name:"CounterSlice",
    initialState : {
        count: 101,
        msg : "Hello"
    },
    //actions
    reducers: {
        increment : (state) => {
            state.count = state.count + 1;
        },
        decrement : (state) => {
            state.count = state.count - 1;
        }
    }
});

export default counterSlice;