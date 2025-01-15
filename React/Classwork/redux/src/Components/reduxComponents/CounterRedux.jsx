import React from 'react'
import { useSelector } from 'react-redux';

function CounterRedux() {
    //need access to count state
    const {count,msg} = useSelector((store) => {
        return store.counterState
    })
      const handleIncrement = () => {
          console.log("handleIncrement");
          //update the state 
          //dispatch it 
          
      }
  
      const handleDecrement = () => {
        console.log("handleDecrement");
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