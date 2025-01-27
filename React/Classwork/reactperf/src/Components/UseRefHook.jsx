import React, {useRef, forwardRef, useState, useEffect} from 'react'

// function UseRefHook() {
//     const inputRef = useRef(null);
//     const focusInput = () => {
//         inputRef.current.focus();
//     }
//     //sending of ref from parent to child , use forwardRef
//     // const CustomComponent = forwardRef((props, ref) => {
//     //     return <AnotherComp  ref={ref} {...props}/>
//     // })
//   return (
//     <div>
//         <input type="text" ref={inputRef} />
//         <button onClick={focusInput}>Click to Add focus</button>
//         {/* <CustomComponent ref={inputRef} placeholder="Enter your age"/> */}
//     </div>
//   )
// }

function UseRefHook() {
    const [seconds, setSeconds] = useState(0); //2
    //we want this value to persist across renders , and when this value changes u do not want to cause a rerender; 
    // let timerId; //ud
    const intervalRef = useRef(null); //{current: null}
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds(prevSec => prevSec+1);
        },1000);
    },[])

    const handleStop = () => {
        console.log("stopping the timer now");
        clearInterval(intervalRef.current);
    }
  return (
    <div>
        <p>Seconds : {seconds}</p>
        <button onClick={handleStop}>Stop Timer</button>
    </div>
  )
}

export default UseRefHook