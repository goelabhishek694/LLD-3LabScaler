import React, { useState, useEffect } from "react";

function UseEffectBasic() {
  const [count, setCount] = useState(0);

  // Use useEffect to update the document title whenever the count changes
  useEffect(() => {
    console.log("in UE 1");
    document.title = `You clicked ${count} times`;
  }, [count]); // Dependency array

  useEffect(() => {
    console.log("in UE 2");
    const timer = setInterval(() => {
      console.log('setInterval', timer);
    }, 1000);
  
    // Cleanup function
    return () => {
        console.log("cleanup is called before UE 2 is called again");
      clearInterval(timer);
    };
  }, [count]);  

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  );
}

export default UseEffectBasic;