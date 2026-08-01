//  function fun(f1){
//    console.log("value of f1 ",f1)
//  }

// // fun(10)
// // fun(true)
// // fun("JT")

// function hello(){
//     console.log("Hello Everyone!!!");
//     return 100
// }

// console.log(hello);

// fun(hello())
// fun(hello)

// function fun2()
// {
//     return sunny
// }

// function sunny()
// {
//     console.log("It's Sunny today")
// }

// let y=fun2()
// console.log(y);          

// function f3()
// {
//     console.log("This is f3 function");
// }

// function f1() {
//     console.log("This is f1 function");
//     return f3
// }

// ============================= setTimeout , setInterval ===========================
// console.log(1);
// console.log(2);
// console.log(3);

// console.log("Arabinda");
// console.log("Binay");
// setTimeout(function f1(){
//     console.log("Aiswarya")
// },5000)
// console.log("Sambit");



 function f1()
 {
     console.log("Hiiiii");
    
}

// const intervalID = setInterval(f1,2000)
// clearInterval(intervalID)
// console.log("///////",intervalID)
// setTimeout(function ()
// {
//     console.log("Clearing interval")
//     clearInterval(intervalID)
//     clearTimeout(timerId)
// },9000)

// let intervalId = setInterval(() => {
//     console.log("Hello");
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Interval stopped");
// }, 5000);

const intervalID = setInterval(f1,2000)
const timerId = setTimeout(function ()
{
    console.log("Clearing interval")
    clearTimeout(timerId)
    clearTimeout(intervalID)
 },9000)

//  console.log(1)
// setTimeout(function(){
//     console.log(":::::::::")
// },1000)
// console.log(2)
