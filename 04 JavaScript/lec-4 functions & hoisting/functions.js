// function declaration
// function </fun_name>(list of params){}
function myFun(){
    console.log("Good Morning!!!")
}

// myFun()

function greet(name="JT"){   
    // , ...xyz
    console.log("Good Morning",name,'!!!')
    // console.log("Good Morning",xyz,'!!!')
    // console.log("Good Morning",arguments,'!!!')
}

// greet("Aiswarya")
// greet(10)
// greet("Rashmi sir")
// greet(true,)
// greet()

// greet("Sai",10,20,30)

// function addJTTag(name){
//     return "JT'ans" + name
// }

// let updatedName = addJTTag(" Aiswarya")
// console.log(updatedName);

function sum(a,b, ...h) {
    return a+b+h
}

let summing = sum(3,5)
// console.log(summing)
// console.log(h)
// Task

//5 non-parameterized

function sleep()
{
  console.log("7-9 hrs of sleep is necessary")
}

sleep()

function iAdd()
{
    console.log(4+3)
}

iAdd()

function letsConcat()
{
    console.log("My Full name is :" + " Aiswarya " + "Ayaskant")
}

letsConcat()

function checkBool()
{
    a=false
    console.log(a)
}

checkBool()

function dc()
{
    console.log(undefined + true + " Batman and Superman are in DC"); 
}

dc()

//5 parameterized

function seeMyType(a)
{
   console.log(typeof(a))
}

seeMyType(null)


// let sum = 0
let add =0
function addit(a,...xyz)
{
   for (let index = 0; index < xyz.length; index++) {
    const element = xyz[index];
    add = add + element
   }
   add = add +a
   console.log(add)
}

addit(4 , 5 ,63 ,9)

function valBool(a)
{
    let sum_it = a + 5;
    console.log(sum_it)
}

valBool(true);

function sentence(a , b)
{
    console.log(a+b+" are in DC ")
}

sentence("Spiderman"," Batman")

//Correct when 1 , "1" , true , "true" = false as NaN vs true
function correctMe(a)
{
    if(a === true)
    {
        console.log("I am correct");
        
    }
    else if(a == true )
    {
        console.log("I am correct");
    }
    else
    {
        console.log("I am wrong");
    }
}

correctMe("true")

//5 parameterized + with return type

function multiply(a,b)
{
    return a*b
}

let values = multiply(3,5) * 5 + 4
console.log(values)

function giveItUp(a,b)
{
    return a + b
}

let give = giveItUp(undefined,2)
console.log(give)

function myName(a,b)
{
    return a + b + " is my Name"
}

let name = myName("Aiswarya " , "Ayaskant" ) + " & he is a baddie"
console.log(name)

function whereIsBlood(a)
{
    if(a = "blood")
    {
        return "is with if "
    }
    else if( a == "blood" )
    {
        return "is with elseif "
    }
    else
    {
        return "is with if"
    }
}

let blood ="Blood "  + whereIsBlood("blood") 
console.log(blood + "real blood")

// Make any returned value divisible by 2

function iseven(a){
    return a*2;
}

let even = iseven(3)
console.log(even)

