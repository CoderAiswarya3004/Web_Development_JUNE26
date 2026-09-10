import React, { useState } from 'react'
import Greet from './Greet'
// import "./App.css"
import Xyz from './Xyz'

const App = () => {
  console.log("App Component")

  const [name,setName] = useState("Ram")
  const [showGreet , setShowGreet ] = useState(true)
    
  const handleClick = (e) =>{
    setName(name + 1)
  }

  return (
    <div className="bg-green" style={{border:'2px solid black',padding:'20px'}}>
        <p>Parent Component State:- {name}</p>

        <button onClick={(e) =>{
             setShowGreet(!showGreet);           
        }}>
        {showGreet ? 'Hide':'show'} Greet
        </button>

        {/* {
          showGreet ?  "Greet is visible": "Greet is not visible"
        } */}

        {/* {
          showGreet ?  <Greet name={name}/>: ""
        } */}

        {/* <Greet name={name}/> */}
        
        {
          showGreet && <Greet name={name}/>
        }

        <Xyz />

        <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default App


