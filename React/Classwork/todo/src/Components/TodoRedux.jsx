import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import TodoSlice from '../redux/TodoSlice';
const actions = TodoSlice.actions;
function TodoRedux() {
    const dispacth = useDispatch();
    const {value, todoList:list} = useSelector((store) => {
        return store.todoState
    });
    const handleChange = (e) => {
        //update my value
        const newValue = e.target.value;
        dispacth(actions.setValue(newValue));
    }

    const handleAddTask = () => {
        dispacth(actions.addTask(value));
    }
  return (
    <>
    <div>Todo</div>
    <div>
        <div className="inputBox">
            <input 
            type="text" 
            placeholder='Add your tasks'
            value={value}
            onChange={handleChange}
            />
            <button onClick={handleAddTask}>Add</button>
        </div>
        <div className="list">
            <ul>
                {list.map((task, id) => {
                    return (<li key={id}>{task}</li>)
                } )}
            </ul>
        </div>
    </div>
    </>
  )
}

export default TodoRedux