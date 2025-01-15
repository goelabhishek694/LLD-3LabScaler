import React, { useContext } from 'react'
import { ThemeWrapper } from './ThemeManager';
function Header() {
  return (
    <>
    <div>Header</div>
    <div>⬇️</div>
    <Options></Options>
    </>
  )
}

function Options(){
    //get currTheme access from store 
    const {currTheme} = useContext(ThemeWrapper);
    return <div className={currTheme}>Hello I am Header</div>
}

export default Header