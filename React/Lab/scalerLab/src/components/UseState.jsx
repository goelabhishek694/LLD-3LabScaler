import React, { useState } from "react";

function UseState() {
  // Define a state variable named "count" and a function to update it, "setCount"
  const [count,setCount] = useState(0);
  // Define a function that increments the count
  const incrementCount = () => {
    setCount(count+1);
    // setCount(prevState => prevState+1);
  };

  // Define a function that decrements the count
  const decrementCount = () => {
    setCount(count-1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      {/* Display the count */}
      <p>Count: {count}</p>
      {/* Button to increment count */}
      <button onClick={incrementCount}>+</button>
      {/* Button to decrement count */}
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default UseState;
