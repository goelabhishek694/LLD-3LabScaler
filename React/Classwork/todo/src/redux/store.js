import {configureStore} from "@reduxjs/toolkit"

import TodoSlice from "./TodoSlice"
const store = configureStore({
    reducer: {
        todoState:TodoSlice.reducer
    }
})

export default store