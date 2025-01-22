import './App.css'
import Navbar from './Components/Navbar.jsx'
import WatchList from './Components/WatchList.jsx'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
// import Context from './poc/Context'
// import ThemeManager from "./poc/themes/ThemeManager";
import {Provider} from "react-redux"
import store from './redux/store'
function App() {

  return (
    <>
    <Provider store={store}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/watchlist' element = {<Watchlist/>}></Route>
    </Routes>
    </Provider>
    
    {/* poc  */}
    {/* <Context/> */}
    {/* <ThemeManager></ThemeManager> */}
    </>
  )
}

export default App
