let numbers = [10,20,30,40,50]

//either loop or extract one by one
// const a =numbers[0]
// const b =numbers[1]
// const c =numbers[2]
// const d =numbers[3]
// const e =numbers[4]
// console.log(a,b,c,d,e)

// const [a,b,c,d,e] = numbers
// console.log(a,b,c,d,e)

// const [a,b,_,e] = numbers
// console.log(a,b,_,e)

// const [a,b,c,...rest] = numbers
// console.log(a,b,c,rest)

// numbers=[100,200]
// const [a,b,c=1000,...rest]  = numbers
// console.log(a,b,c,rest)

//====================Destructing of Objects
const user ={
    id:101,
    name:"Amit",
    age:25,
    salary:40000,
    address:{
        city:"BBSR",
        pin:"751005"
    }
}

// const{a,b} =user
// console.log(a,b)

// const{id,name,age =30,...rest} =user
// console.log(id,name,age,rest)

const{id:userID,name:userName,age =30,...rest} =user
// console.log(id,name,age,rest) //referenceError :-id is not defined
console.log(userID,userName,age,rest)

//=====Task update employee state from target object

const employee={
    id:102,
    name:"Ramesh",
    age:24,
    salary:50000
}

function handleUpdate(target){
    const{name,value} = target
    console.log("/////",name,value, typeof name);
    employee[name] =value

    //if(name ==="id")
    // {
    //     employee.id = value
    // }
}

handleUpdate({name:"age",value:28})
handleUpdate({name:"id",value:102})
handleUpdate({name:"salary",value:40000.99})

console.log(employee)