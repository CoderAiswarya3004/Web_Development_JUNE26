let numbers = [10,20,30,40,50]

// for(let i=0;numbers.length;i++)
//     console.log(numbers[i]);
//     console.log(hello)

//  numbers.forEach(function printNumbers(num,idx,arr){
//     console.log("value is",num,"at idx",idx,"of Array",arr);
//     })

// numbers.forEach(printNumbers)

// function printNumbers(num,idx,array){
//     console.log("value is",num,"at idx",idx,"of Array",arr);
// }


// const printNumbers = function(value,idx,arr)
// {
//     console.log("value is",value,"at idx",idx,"of array",arr);
// }

// numbers.forEach(printNumbers)

    // numbers.forEach(function(value,idx,arr){
    //     console.log("value is",value,"at idx",idx,"of Array",arr);
    // })

//  numbers.forEach((value,idx,arr) =>{
//      console.log("value is",value,"at idx",idx,"of array",arr);
//  })

 // ================================ map function

 const numbersIncreasedByTwo = numbers.map((value,idx,arr) =>{
   console.log("value is",value,"at idx",idx,"of array",arr);
   return value+2 
 })
 console.log("numbersIncreasedByTwo",numbersIncreasedByTwo);

const squareNumbers = numbers.map(num => num * num)
console.log("squareNumbers",squareNumbers);

const cubeNumbers = numbers.map(num => num * num * num)
console.log("cubeNumbers",cubeNumbers);

const users = [
    {
        id: 101,
        name:'Sambit Parida',
        salary:100000
    },
    {
        id: 102,
        name:'Snigdha Mohanty',
        salary:110000
    },
    {
        id: 103,
        name:'Aiswarya Ayaskant',
        salary:120000
    },
    {
        id: 104,
        name:'Sinumayee Prusty',
        salary:130000
    },
]

const firstName = users.map((value,idx,users) =>{
        return {
            id : value.id,
            firstname:value.name.split(" ")[0],
            bonus:value.salary*.1
        }
})

console.log(firstName);

// ======================== filter function
