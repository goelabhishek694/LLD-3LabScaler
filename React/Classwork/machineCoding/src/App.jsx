import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageCarousel from './Components/ImageCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ImageCarousel/>
  )
}

export default App
