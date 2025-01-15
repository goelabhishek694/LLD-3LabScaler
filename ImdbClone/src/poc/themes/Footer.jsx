import React, { useContext } from 'react'
import { ThemeWrapper } from './ThemeManager';
function Footer() {
    const {handleTheme} = useContext(ThemeWrapper);
  return (
    <>
    <button onClick={handleTheme}>Toggle Theme</button>
    <Options></Options>
    <Options></Options>
    <Options></Options>
    </>
  )
}

function Options(){
    //get currTheme access from store 
    const {currTheme} = useContext(ThemeWrapper);
    return <div className={currTheme}>Hello I am Footer</div>
}

export default Footer