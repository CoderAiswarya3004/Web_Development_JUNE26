import './App.css'
import CustomButton from './CustomButton';

function App() {

  const handleClick = (e , name) =>{
    // console.log("paragraph clicked",e);
    console.log("paragraph clicked:-",e,name);
  }

  const dblClick = (e) =>{
    console.log("paragraph clicked",e);
  }

  function handleChange(e){
    // console.log("Input Change",e.target.name,"->",e.target.value)

    const{name,value} = e.target
    console.log("Input change detected:-",name,"->",value)
  }

  return (
    <>
      {/* <p onClick={() => console.log("p clicked!!!")}>Click Here...</p> */}
      {/* <p onClick={(e) => console.log("p clicked!!!",e)}>Click Here...</p> */}

      {/* <p onClick={handleClick()}>Click Here...</p> */}
      {/* <p onClick={handleClick}>Click Here...</p>
      <p onDoubleClick={dblClick}>Double click here...</p> */}
      
      <p onClick={(e) => handleClick(e,"React")}>Double click here...</p>

      <input type='text' name="username" onChange={handleChange}/>
      <input type='text' name="password" onChange={handleChange}/>

      <CustomButton value={"Hiii"} 
      onClick={(e)=>{
        console.log("Custom Button clicked")
      }}/>
    </>
  )
}

export default App
