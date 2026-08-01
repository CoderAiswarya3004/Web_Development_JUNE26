// debugger;
// var quest = 12
    var a=10
    let b=20
// function f2()
// {
//     console.log("I am Aiswarya")
// }

// f2()

// let cons=8

// let f1=function(){
//     console.log("I am Aiswarya Ayaskant")
// }

// f1()

// function rest()
// {
//     var sleep = "6 hrs"
//     let b=8
// }

// rest()

// //block scope

// if(cons == 8)
// {
//    let sleeping ="4 hrs"
//    var news=7;

//    console.log(sleeping)
//    console.log(news);
// }
// else
// {
//     let resting ="2 hrs"
// }

// console.log(sleeping)
// console.log(news);

//---------------------------------------- Lexical scope
function fun1(){
    debugger
    let x = 10
    console.log(x);

    function fun2(){
        let y=20;
        console.log(y)
        console.log("Value of x inside nested function",x);

        function fun3()
        {
            console.log("value of y inside fun3", y);
            console.log("value of x inside fun3", x);
            console.log("value of a inside fun3", a);
            console.log("value of b inside fun3", b);
        }
        console.log("Before Calling fun3")
        fun3()
        console.log("After Calling fun3")
    }

    console.log("Before Calling fun2")
    fun2()
    console.log("After Calling fun2")
}

fun1()
// fun2()

