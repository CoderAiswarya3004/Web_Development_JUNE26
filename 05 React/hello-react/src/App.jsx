import React,{Fragment} from 'react'
import './App.css'
import App1 from './App1.jsx'
import Product from './Product.jsx'
import products from './product.js'

function App() {

  const  a= 10
  const b = 20

  return (
    // <div>
    //   <h1>
    //   Hello React
    //   </h1>
    //   <h2>
    //     Mentor:Sai Pranab Patra
    //   </h2>
    // </div>

    //  <React.Fragment>
    //     <h1>
    //   Hello React
    //   </h1>
    //   <h2>
    //     Mentor:Sai Pranab Patra
    //   </h2>
    // </React.Fragment>


    // <Fragment>
    //     <h1>
    //   Hello React
    //   </h1>
    //   <h2>
    //     Mentor:Sai Pranab Patra
    //   </h2>
    // </Fragment>


    <>
        <h1>
      Hello React
      </h1>
      <h2>
        Mentor:Sai Pranab Patra
      </h2>
      <p>a is : {a}</p>
      <p>b is : {b}</p>
      <p>a + b : { a+ b}</p>

      {/* {App1()} -- Not a good approach */}
      {/* <App1></App1> */}
      {/* App1() :- Not recognised as a component */}
      <App1/>

      {/* {Product()} */}
      {/* <Product></Product> */}
      {/* <Product name="Watch" price="2500" description="This is a watch" brand="Rolex" />
      <Product name="Mobile" price="30000.99" brand="Samsung"/> */}
      
      {products.map(p=>(
        <Product name = {p.name}  price ={p.price} description={p.description} brand={p.brand}></Product> 
      ))}

    </>
  )
}

export default App
