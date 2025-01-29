import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterClass from './Components/CounterClass'
import TodoList from './Components/TodoList'
import WithLoading from './Components/HOC/withLoading'
import DataComponent from './Components/HOC/DataComponent'

function App() {
  const EnhancedComponent = WithLoading(DataComponent);
  const EnhancedComponent2 = WithLoading(DataComponent);

  return (
    <>
    {/* <CounterClass count={10}/> */}
    {/* <TodoList/> */}
    {/* <DataComponent data="I am some data"/> */}
    <EnhancedComponent data="I am some data"/>
    <EnhancedComponent2 data="I am some data"/>
    </>
  )
}

export default App
