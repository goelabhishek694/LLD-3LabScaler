import React from 'react'
import Logo from "../assets/MovieLogo.png"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex space-x-8 items-center font-bold'>
    <Link to="/"><img className="w-14" src={Logo}></img></Link>
    <Link to="/" className='text-3xl text-blue-500'>Movies</Link>
    <Link className='text-3xl text-blue-500' to="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar