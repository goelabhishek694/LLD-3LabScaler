import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoRedux from './Components/TodoRedux'
import User from './Components/User'
import UserRedux from './Components/UserRedux'

function App() {
  return (
    <>
      {/* <TodoRedux></TodoRedux> */}
      {/* <User></User> */}
      <UserRedux></UserRedux>
    </>
  )
}

export default App
