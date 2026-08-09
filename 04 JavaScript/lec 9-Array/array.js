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

fruits.push('Mango','Orange')
console.log(fruits);
console.log("last index of mango is ",fruits.lastIndexOf("Mango"));

console.log(fruits.slice(0,3));
console.log(fruits.slice(1,3));
console.log(fruits.slice(2));
console.log(fruits.slice(2,9));
console.log(fruits.slice());
console.log(fruits.slice());

// console.log(fruits.splice(2,3));
// fruits.splice(2,3)
// console.log("After splice",fruits);

fruits.splice(2,3,"Cherry")
console.log("After splice2",fruits);

const numbers =["10","20","30"]
const fruitsWithNumbers = fruits.concat(numbers)
console.log("fruits with numbers",fruitsWithNumbers);

const fruitsString = fruits.join('-#?')
console.log(fruitsString); 

fruits.reverse()
console.log("After reverse",fruits);

fruits.push(1,2,3)
fruits.sort()
console.log("After sort",fruits);

const arr =[10,20,30,5]
// arr.sort((a,b) => b-a)
// console.log(arr)
  // (a,b) => {console.log("Adding num1 , num2")
  //    return num1 + num2
  // }
//  arr.sort(function xyz(a,b){
//    return a-b
//  })
// console.log(arr)

// function xyz(a,b){
//    return a-b
//  }

