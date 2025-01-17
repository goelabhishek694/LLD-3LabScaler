import {createSlice} from "@reduxjs/toolkit"

const UserSlice =  createSlice({
    name:"userSlice",
    initialState: {
        userData:null,
        error:null,
        loading:true,
        param:1
    },
    reducers:{
        setUser: (state, action) => {
            state.loading = false;
            state.userData = action.payload;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setParam: (state,action) => {
            state.param = action.payload;
        },
        setLoading: (state) => {
            state.error = null;
            state.loading=true;
        }
    }
})

export default UserSlice