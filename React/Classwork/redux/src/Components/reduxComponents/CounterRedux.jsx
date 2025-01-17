import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '../../redux/counterSlice';
const actions = counterSlice.actions;
function CounterRedux() {
    //need access to count state
    const {count,msg} = useSelector((store) => {
        return store.counterState
    })
    const dispatch = useDispatch();
      const handleIncrement = () => {
          console.log("handleIncrement");
          //update the state 
          //dispatch it 
          dispatch(actions.increment());

          
          
      }
  
      const handleDecrement = () => {
        console.log("handleDecrement");
        dispatch(actions.decrement());
      }
    return (
      <>
      <div>Counter</div>
      <button onClick={handleIncrement}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
      </>
    )
}

export default CounterRedux