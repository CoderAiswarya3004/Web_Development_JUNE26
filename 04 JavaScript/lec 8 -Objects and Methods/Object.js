// const user ={
//     firstname : "Ankit",
//     lastname: 'Padhi',
//     age : 23,
//     "isGraduated" : true,
//     'address' : 'bbsr',
//     'course-fee': 30000.99,
//      greet: function(){
//         console.log("Ankit says Hello!!!",this);
//      },

//      hello:() =>{
//         console.log("Hello Everyone",this);
//      },

//      combineName: (a,b) =>{
//      console.log(a+b);
//      }
// }

//Extract complete object
// console.log("user object",user);

// //Extract single values from Object
// console.log("firstname",user.firstname);
// console.log("lastname :" , user.lastname);
// console.log("fullname:" , user.firstname +" "+user.lastname);

// console.log("age is", user["age"]);
// console.log("Course fee is", user["course-fee"]);

// // console.log("Course fee is", user[age]);
// // . doesnt work in course fee where hypen , space there 

// console.log("Fullname key is", user.fullname);// undefined as key is not present

// // Add or Update key to object 
// user.fullname = "Ankit Ku. Padhi"
// user.isGraduated=false

// console.log("Fullname key is", user.fullname);
// console.log(user);

// user["Phone-Number"] = 9865734543
// user["Aadhar-no."]  = "7654-4445-8765"

// console.log(user);

//Access Method
// user.greet()
// user.hello()
// user.combineName(user.firstname,user.lastname)

// Nested object
const employee ={
    fullname: 'Sahil Patra',
    age: 32,
    address:{
        city:"BBSR",
        state:"Odisha",
        PIN:"751007"
    },
}

//Extract complete object
console.log(employee.address.PIN ); 

//Acessing null object key gives null pointer exception

//Used when data fetching from backend .?  

const army ={
    fullname : "Ravikant",
    rank : "major",
    age : 28 ,
    sports : {
        specialization : "cricket",
        "annual-event rank":10,
        "indoor-sports":{
            games : "carrom"
        },
        "outdoor-sports" :{
            games : "badminton"
        }
    } 
}

console.log(army);
console.log(army.fullname);
console.log(army.rank);
console.log(army.age);
army.sports['indoor-sports'] = null
console.log(army.sports.specialization);
console.log(army.sports["outdoor-sports"])
console.log(army.sports["indoor-sports"])
console.log(army.sports["outdoor-sports"].games);
