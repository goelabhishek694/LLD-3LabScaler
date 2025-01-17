import {configureStore} from "@reduxjs/toolkit"
import TodoSlice from "./TodoSlice"
import UserSlice from "./UserSlice"
const store = configureStore({
    reducer: {
        todoState:TodoSlice.reducer,
        userState:UserSlice.reducer
    }
})

export default store