import {createSlice} from "@reduxjs/toolkit"

const TodoSlice = createSlice({
    name: "taskbox",
    initialState: {
        value: "",
        todoList: ["revise JS"]
    },
    reducers:{
        setValue: (state, action) => {
            let newValue = action.payload;
            state.value = newValue;
        },
        addTask: (state, action) => {
            let task = action.payload;
            let updatedTaskList = [...state.todoList, task];
            state.todoList = updatedTaskList;
            state.value = "";
        }
    }
})

export default TodoSlice