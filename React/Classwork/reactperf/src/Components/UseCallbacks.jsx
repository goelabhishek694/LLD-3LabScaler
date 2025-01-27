import React, { useCallback, useMemo, useState } from "react";

// const removeItem = (itemToBeRemoved, setItems) => {
//   console.log(itemToBeRemoved);
//   setItems((prevItems) => prevItems.filter((item) => item != itemToBeRemoved))
// }
function UseCallbacks({value}) {
  const [items, setItems] = useState(["Item1", "Item2", "Item3"]);
  // const compValue = useMemo(() => someExpensiveComputation(),[]);
  // const removeItem = useCallback((itemToBeRemoved) => {
  //   console.log(itemToBeRemoved);
  //   // let updatedItems = items.filter((item) => item != itemToBeRemoved);
  //   // if you want to odate the items state , then do not incldeu that state as dependency .it will destory the overall necessity to add useCallback. instead use the callabck approach in your setItems function to access the latest state value .
  //   setItems((prevItems) => prevItems.filter((item) => item != itemToBeRemoved))
  //   console.log(value);
  // },[value, compValue]);
  
  // const removeItem = useCallback((itemToBeRemoved) => {
  //   console.log(itemToBeRemoved);
  //   let updatedItems = items.filter((item) => item != itemToBeRemoved);
  //   setItems(updatedItems);
  // },[items]);


  return (
    <div>
      {items.map((item, idx) => {
        return (
          <div key={idx}>
            {item}
            <button onClick={() => removeItem(item)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default UseCallbacks;