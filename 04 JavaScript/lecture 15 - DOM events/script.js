const  handleDblClick = () =>{
    console.log("Heading double clicked");
}

// 2. using event properties
const h1=document.getElementById("first-heading")

h1.onmouseover = handleOnMouseOver

function handleOnMouseOver(){
    console.log("Mouse hover effect")
}

h1.onmouseover = handleOnMouseOver2

function handleOnMouseOver2(){
    console.log("Mouse hover effect - 2nd fun")
}

// 3.using addEventListener
const secondH1 = document.querySelector("#sec-heading")

secondH1.addEventListener("click",() =>{
    console.log("DOM Event listener clicked")
});

//Note without on is event dblClick
//
secondH1.addEventListener("click",handleDomEventHeadingClick)

function handleDomEventHeadingClick(event){
    console.log("DOM Event listener clicked -2nd fun")
    console.log("/////",event)
    console.log("/////",event.clientX)
    console.log("/////",event.clientY)
    console.log("/////",event.type)
    console.log("/////",event.target)
    console.log("/////",event.target.textContent)
    // event.target.style.color = "green"
    event.target.remove()
}


