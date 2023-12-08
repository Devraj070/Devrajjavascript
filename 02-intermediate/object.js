// objects are super important for grouping the data and functionalities.so we can do lots of things in objects of js.
// objects are constructed in a key and value pair.
// let mycars =(here mycars is the name of the object, bmw audi are the keys)

// json-javascript object notation
        // helps

// const jsuser={
//     name:"Shubha",
//     email:"shree@gmail.com",
//     "full name":"shubhashree",
//     age:"22",
//     location:"odisha",
//     isLoggedIn:"false",
//     lastLoggedinDays:["monday","wednessday","friday"]
// }
// console.log(jsuser.name);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);

// jsuser.email="shubhashree@gmail.com";
// Object.freeze(jsuser);                                  // we use freeze methode to stick the mail in one point.
// jsuser.email="shubhashreeKhilar@gmail.com";
// console.log(jsuser.email)

// jsuser.greeting = function(){
//     console.log("hello future");
// }
// jsuser.greetingTwo = function(){
//     console.log(Hello jsuser, ${this.name});
// }
// jsuser.greeting();
// jsuser.greetingTwo();

// ex2
// const tinderuser={}
// tinderuser.id="1234",
// tinderuser.email="shree@mail.com",
// tinderuser.name="shree"
// console.log(tinderuser)

// ex3
// const regularuser={
//     email:"somalin@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "somalin",
//             lastname: "roy"
//         }
//     }
// }
// console.log(regularuser.fullname.userfullname.firstname)
// console.log(regularuser.fullname)

// ex4
// const obj1={
//     1:"a",
//     2:"b"
// }
// const obj2={
//     3:"a",
//     4:"b"
// }
// const obj3={...obj1,...obj2}
// console.log(obj3);


// object destructure:-
const course={
    CourseName:"Last minute placement",
    price:9999,
    courseinstructor:"rajeev"
}
const{
    courseinstructor:teacher}=course
    console.log(teacher);