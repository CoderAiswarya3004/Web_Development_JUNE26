import { useState } from "react"
import { Link } from "react-router"

export default function Header() {

  // const value = localStorage.getItem('isDark') ?? false 
  // console.log("///",value,typeof value)
  const[isDark , setIsDark] = useState(JSON.parse(localStorage.getItem('isDark') ?? false))

  if(isDark){
    document.body.classList.add('dark')
  }else{
    document.body.classList.remove('dark')
  }

  const handleClick = ()=>{
    // document.body.classList.toggle('dark')
    localStorage.setItem('isDark',!isDark)
    setIsDark(!isDark)
  }

  // ?? -> nullish coalescing operator

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <Link to="/">Where in the world?</Link>
        </h2>
        <p className="theme-changer" onClick={handleClick}>
          {/* <i className={`${isDark ? 'fa-regular fa-sun':' fa-solid fa-moon'} `}/> */}
          <i className={isDark ? 'fa-regular fa-sun':' fa-solid fa-moon'}/>
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  )
}