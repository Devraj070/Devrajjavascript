/* 
    Arrow function:- 
    **In ES6 major update had done.It changes the old syntax of function declaration and tried to reduce the length of a code.
   
    **I n arrow function we need a variabkle to declaire it and majorly used => this operator to define arrow function.
    
*/  
//  Old syntax of a function

// ex1

// function addTwoNos(num1,num2){
//     return num1 +num2;
// }
// console.log(addTwoNos(5,5));


//Arrow Function

// ex2

// const user ={
//     username : "shree",
//     location : "BBSR",
//     welcomeMessage :function(){
//     console.log(${this.username},Good Morning);
//     console.log(this);
// }
// }

// // console.log(user);

// user.welcomeMessage();


// ex3

// const person={
//     name : "Rally",
//     age : 20,
//     loginDay:["sunday","monday"],
//     username :{
//         userDetails :{
//             lname:"sahoo",
//             fname:"sagarika",
//         }
//     }
// }
// console.log(person.username.userDetails.fname);
// console.log(person);

// ex4

const userDetails = () => {
    let fname = "shree"
    console.log(fname)
}
userDetails();