//============================== q1
const users = [
  { id: 1, name: "Amit", isActive: true },
  { id: 2, name: "Rahul", isActive: false },
  { id: 3, name: "Neha", isActive: true }
];

const active = users.filter((value,index,arr) =>{
  return value.isActive == true
})

console.log(active);

//============================== q2

const name =["Rahul","Seema","Aausi"]
const username = name.map((name)=>console.log(name) )



//================================ q3
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];

// const filteredname = products.filter(product => product.price > 25000).map(product => product.name)

// console.log(filteredname)
const filteredname = products.filter((product, index) => {
    console.log(index);
    return product.price > 25000;
});

console.log(filteredname)

//======================== q4

const students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 }
];

const result = students.map(student => ({
        name : student.name,
        mark : student.marks,
        results : student.marks > 50 ? "Pass":"Fail" 
}))

console.log(result);

