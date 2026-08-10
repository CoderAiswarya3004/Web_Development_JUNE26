// let fruits =["Apple","Banana","Mango"]

// //for loop -----------------------
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// //for of loop ------------------------
// console.log("By using for of loop ----------")
// for(const h  of fruits)
// {
//     console.log(h)
// }

// for in loop ------------------------ (object)
const student ={
    id:101,
    name: "Ankit",
    age: 25,
    course:"Java Fullstack",
    courseFees: 30000.99
}

// console.log("By using for in loop ----------")

// for(const key in student)
// {
//     //log(key, typeof Key)
//     console.log(student[key])
// }

//Object.keys() ---------------------
// console.log(Object.keys(student))//array -> of keys
// console.log(Object.values(student))//arrays -> of values

// for(let getKeys of Object.keys(student))
// {
//     console.log(getKeys)
// }

// Object.values(student).forEach((n) => console.log(n))


// const student ={
//     id:101,
//     name: "Ankit",
//     age: 25,
//     course:"Java Fullstack",
//     courseFees: 30000.99
// }

// console.log(Object.entries(student))
// const entries = Object.entries(student)
// for(const entry of entries )
// {
//     // console.log("////",entry) //array
//     for(let i=0;i<entry.length;i++)
//     {
//         console.log("value is",entry[i],"at idx",i)
//     }
// }

// const entries = Object.entries(student) 
// for(let entry of entries)
// {
//     const [key,value] = entry
//     console.log(a,"->",b)
// }

// for(let [key,value] of Object.entries(student))
// {
//  console.log(key,"->",value)   
// }