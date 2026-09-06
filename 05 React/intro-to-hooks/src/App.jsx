import { useState } from "react";

function App() {
  // let count = 0
  // [initial value,state function] <- state <- useState(initial value)
  const state = useState(12)
  // console.log("////",state)
  // console.log("////",state[0])
  // console.log("////",state[1])
  const [count , setCount] = state
  console.log("App component",count)

  function increment(){
    // count++;
    // state[0]++

    // console.log("increasing count",state[0]);
    // state[1](state[0]++)
    // setCount(count++)
    // setCount(count+1)

    // setCount((prevState)=>{
    //   console.log("prevstate:-1 is",prevState)
    //   console.log("count:-1 is",count)
    //   return prevState + 1 
    // })
    // setCount((prevState)=>{
    //   console.log("prevstate:-2 is",prevState)
    //   console.log("count:-2 is",count)
    //   return prevState + 1 
    // })
    // setCount((prevState)=>{
    //   console.log("prevstate:-3 is",prevState)
    //   console.log("count:-3 is",count)
    //   return prevState + 1 
    // })

    setCount(prevState => prevState +1)
    setCount(prevState => prevState +1)
    setCount(prevState => prevState +1)
    
    console.log("increasing count",count);
  }

  function increment2(){
    setCount(count+2)
    console.log("increasing count",count);
  }

  const decrease = () =>{
    // if(count>0)
    setCount(count == 0 ? 0 : count-1)
    // If the state is re assigned with the same value then component would not be re-rendered
    // eg: if the state is 0 and we try to reassign 0 again then component won't be rendered due to react intelligence . If we assign any other value then react will re-render the component
  }

  return (
    <div style={{textAlign:'center'}}>
      <h1>Counter App</h1> 
      <br /><br />
        
        <button onClick={increment2}>Increase By 2</button>
        <br /><br />
        <button onClick={increment}>Increase</button>
        <br /><br />
        <button>{count}</button>
        <br /><br />
        <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App
