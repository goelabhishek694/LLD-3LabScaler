import React, { useState, useRef, useEffect } from 'react'

function Stopwatch() {
    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(true);
    const intervalRef = useRef(null); //{current: null}
        useEffect(() => {
            intervalRef.current = setInterval(() => {
                setTime(prevSec => prevSec+1000);
            },1000);
        
        },[])

    const startTimer = () =>{
        if(!isRunning){
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime(prevSec => prevSec+1000);
            },1000);
        }
    }

    const stopTimer = () =>{
        if(isRunning){
            setIsRunning(false);
            clearInterval(intervalRef.current)
        }
    }

    const resetTimer = () =>{
        if(isRunning){
            setIsRunning(false);
            clearInterval(intervalRef.current)
            setTime(0);
        }
    }

    const formatTime = (timeInSeconds) => {
        const getHours = `0${Math.floor(timeInSeconds/3600)}`.slice(-2);
        const minutes = Math.floor(timeInSeconds%3600);
        const getMinutes = `0${Math.floor(minutes/60)}`.slice(-2);
        const seconds = Math.floor(minutes%60)
        const getSeconds = `0${seconds}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSeconds}`;
    }
  return (
    <div>
        {/* displays the time  */}
        <h1>{formatTime(time)}</h1> 
        <buttoon onClick={startTimer}>Start</buttoon>
        <buttoon onClick={stopTimer}>Stop</buttoon>
        <buttoon onClick={resetTimer}>Reset</buttoon>
    </div>
  )
}

export default Stopwatch