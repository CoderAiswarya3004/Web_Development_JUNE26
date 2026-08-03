// const s1 = "Amit"
// const s1 = "Ankit"
// const s1 = "Asit"

// const stds=["Amit", "Ankit", "Asit"]
// console.log(stds);

// // console.log(stds[0]); 
// // console.log(stds[1]); 
// // console.log(stds[2]); 

// for(i=0;i<stds.length;i++)
// {
//     console.log(stds[i]); 
// }

// console.log(stds[4]); //undefined

// stds[10]="sambit"
// console.log(stds);

// ====================== Array methods

const fruits =["Apple", "Banana", "Mango"]

fruits.push("Orange","Cherry")
console.log(fruits);

fruits.pop("Cherry");
console.log(fruits);

fruits.unshift("cherry")
console.log(fruits);

fruits.shift("cherry")
console.log(fruits)

console.log(fruits.includes("Apple",2))

console.log(fruits.indexOf("Banana"))
console.log(fruits.indexOf("Banana",2))


// step 1 => check mango exists or not
// if (fruits.includes("Mango")){
// step 2 => if exists then extract the index
//  const idx = fruits.indexOf("Mango")
// step 3 => then update the value in index
//   fruits[idx] = "Kiwi"
//    console.log(fruits)
//}
// else{
// step 4 => if exists do nothing
//  alert("Serch element is not present")
//}

let x = fruits.indexOf("Orange",0)
if(x > 0)
{
    fruits[x]="kiwi"
    console.log(fruits);
}
else
{
  console.log("Value doesn't exist kindly check the index");
}

