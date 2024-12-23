import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import UseState from './components/UseState'
import SimpleForm from './components/SimpleForm'
import AdvancedForm from './components/AdvancedFrom'
import FormikForms from './components/FormikForms'
import TemperatureInput from './components/TemperatureInput'
import TemperatureDisplay from './components/TemperatureDisplay'
import UseEffectBasic from './components/UseEffectbasic'
import FetchDataComponent from './components/FetchDataComponent'
import Routing from './components/Routing'

function App() {
  const [count, setCount] = useState(0);
  const [temperature, setTemperature] = useState('');

  const handleTemperatureChange = (temp)=>{
    setTemperature(temp);
  }

  return (
    <>
    {/* <UseState/> */}
    {/* <SimpleForm/> */}
    {/* <AdvancedForm/> */}
    {/* <FormikForms/> */}
    {/* <TemperatureInput temperature = {temperature} tempChange ={handleTemperatureChange}/> */}
    {/* <TemperatureDisplay temperature = {temperature} /> */}
    {/* <UseEffectBasic/> */}
    {/* <FetchDataComponent/> */}
    <Routing/>
    </>
  )
}

export default App
