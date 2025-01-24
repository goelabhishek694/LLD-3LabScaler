import React from 'react'
import { useState, useMemo } from 'react';
const generateLargeArray = () => {
    const largeArray = [];
    for(let i = 0; i < 100000 ; i++){
        largeArray.push(i);
    }
    return largeArray;
}

function sumArr(arr){
    return arr.reduce((acc,curr) => acc + curr,0)
}

function UseMemo() {
    console.time()
    console.log("Calculating sum");
    const largeArr = useMemo(() => generateLargeArray(), []);
    const sum = useMemo(() => sumArr(largeArr), [largeArr])

    console.log("sum is ", sum);
    console.timeEnd();
    
    const [count,setCount] = useState(0);
  return (
    <div>
        <h1>Sum : {sum}</h1>
        <button onClick={() => setCount(count+1)}>+</button>
        <p>Count: {count}</p>
    </div>
  )
}

// function UseMemo(){
//     const [numbers,setNumbers] = useState([1,2,3]);
//     const total = useMemo(() => {
//         console.log("expensinve comp running.....");
//         return numbers.reduce((acc,curr)=>acc+curr,0);
//     },[numbers]);
//     //shallow checking 

//     return (
//         <div>
//             <div>Total: {total}</div>
//             <button onClick={() => setNumbers([...numbers])}>Add Number</button>
//         </div>
//     )
// }
export default UseMemo