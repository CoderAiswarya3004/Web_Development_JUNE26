// let numbers = [10,20,30,40,50]

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

//  const numbersIncreasedByTwo = numbers.map((value,idx,arr) =>{
//    console.log("value is",value,"at idx",idx,"of array",arr);
//    return value+2 
//  })
//  console.log("numbersIncreasedByTwo",numbersIncreasedByTwo);

// const squareNumbers = numbers.map(num => num * num)
// console.log("squareNumbers",squareNumbers);

// const cubeNumbers = numbers.map(num => num * num * num)
// console.log("cubeNumbers",cubeNumbers);

// const users = [
//     {
//         id: 101,
//         name:'Sambit Parida',
//         salary:100000
//     },
//     {
//         id: 102,
//         name:'Snigdha Mohanty',
//         salary:110000
//     },
//     {
//         id: 103,
//         name:'Aiswarya Ayaskant',
//         salary:120000
//     },
//     {
//         id: 104,
//         name:'Sinumayee Prusty',
//         salary:130000
//     },
// ]

// const firstName = users.map((value,idx,users) =>{
//         return {
//             id : value.id,
//             firstname:value.name.split(" ")[0],
//             bonus:value.salary*.1
//         }
// })

// console.log(firstName);

// ======================== filter function
// numbers =[10,11,20,21,30,31]

// const divisibleByTen = numbers.filter((value,idx,arr)=>{
//     console.log("value is",value,"at idx",idx,"of Array",arr);

//     return value % 10 == 0
// })
// console.log("divisible By ten",divisibleByTen);
// divisibleByTen.forEach((value) => console.log(value))

// numbers.filter() 

// =============================== some()
// numbers =[10,20,30,40]
// const isAnyOddPresent = numbers.some(num => num %2 ==1)
// console.log("/////// is Any Odd Present", isAnyOddPresent);

// const isEveryMemberAreEven = numbers.every(num => num %2 ==0)
// console.log("////// is Every Members even",isEveryMemberAreEven);

//=============== 
// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mobile", price: 20000 },
//   { id: 3, name: "Tablet", price: 30000 }
// ];

// const isPresent = products.some(product => product.price > 40000)
// console.log(isPresent);

// const isEvery = products.every(product => product.price > 40000)
// console.log(isEvery);

//===============
// const users = [
//   { id: 1, name: "Amit", isActive: true },
//   { id: 2, name: "Rahul", isActive: false },
//   { id: 3, name: "Neha", isActive: true }
// ];

// const isEveryActive = users.every( Active => Active.isActive )
// console.log(isEveryActive);

// const isSomeActive = users.some(Active => Active.isActive)
// console.log(isSomeActive);

//====================

// const numbers = [10,20,30,40,41,51]

// const finding = numbers.find(number => number =41 )
// console.log("is 41 found",finding);

// const findingidx = numbers.findIndex(number => number =41 )
// console.log("is 41 found",findingidx);

//================== id =2 & 

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];

// const finding = products.find(product => product.id == 2)
// const findingidx = products.findIndex(product =>product.id ==2)

// console.log(finding);
// console.log("its index is "+findingidx)

///======================== name = c

const students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 }
];

const finding = students.find(product => product.name == "C")
const findingidx = students.findIndex(product =>product.name =="C")

console.log(finding);
console.log("its index is "+findingidx)