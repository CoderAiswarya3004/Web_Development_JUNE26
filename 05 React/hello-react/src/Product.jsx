// export default function Product(props) {
    
// const name = props.name
// const price = props.price

// const {name , price} = props

// console.log("...",props)
export default function Product({name,price, ...others }) {
        return(
            <>
            <h3>Name:- {name}</h3>
            <p>Price:- {price}</p>
            <p>{others.description ? `description:- ${others.description}`:``}</p>
            <p>{others.brand ? `brand:- ${others.brand}`:``}</p>
            </>
        )
}

// console.log("",Product());
// {/* <p>hello</p> */}