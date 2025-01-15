import React,{useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(count-1);
    }
  return (
    <>
    <div>Counter</div>
    <button onClick={handleIncrement}>+</button>
    <p>{count}</p>
    <button onClick={handleDecrement}>+</button>
    </>
  )
}



export default Counter