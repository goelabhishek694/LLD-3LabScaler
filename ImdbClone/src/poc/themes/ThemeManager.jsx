import React, { createContext, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Article from './Article'
import "./themeManager.css"
export const ThemeWrapper = createContext();
function ThemeManager() {
    const [currTheme, setCurrTheme] = useState("light");
    const handleTheme = () => {
        const newTheme = currTheme == "light" ? "dark" : "light"
        setCurrTheme(newTheme);
    }
  return (
    <ThemeWrapper.Provider value={{currTheme, handleTheme}}>
    <button onClick={handleTheme}>Toggle Theme {currTheme}</button>
    <Header></Header>
    <Article></Article>
    <Footer></Footer>
    </ThemeWrapper.Provider>
  )
}

export default ThemeManager