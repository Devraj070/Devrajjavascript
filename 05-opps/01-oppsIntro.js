//there are certain features or mechanism which make the language object oriented.
/*
objects -
objects is an unique entity that contains properties and methods.




*/

// let person = {
//     first_name : "Debaraj",
//     last_name: "Malik",

//     getFunction: function(){
//         return (`the name of the person is ${person.first_name}${person.last_name}`)
//     },

//     phone_number:{
//         mobile:'9888445445',
//         lant_line : '985545444'
//     }
// }

// console.log(person.getFunction());
// console.log(person.first_name);
// console.log(person.last_name);


// console.log(person.phone_number.lant_line);
// object constructor
/*2.class
3.inheritance
4.encapsulation
5.polimorphism
6. abstraction
*/

// function person(first_name, last_name) {
//         this.first_name = first_name;
//         this.last_name = last_name;
//     }


// let person1 = new person('Rahul','Sharma');
// let person2 = new person('Rohit','Sharma');

// console.log(person.first_name);
// console.log(`${person2.first_name} ${person2.last_name}`);




// class vahicle{
//     constructor(name,maker,engine){
//         this.name = name;
//         this.maker=maker;
//         this.engine=engine;

//     }
//     getDetails(){
//         return(`the name of the bike is ${this.name}`)
//     }
// }

// let bike1 = new vahicle('hayabusa','suzuki','1340cc');
// let bike2 = new vahicle('duke','ktm','350cc');


// console.log(bike1.name);
// console.log(bike2.engine);
// console.log(bike1.getDetails());


//inheritance

//it is a property in which it inherit the property of parent class to child class.

// class person{
//     constructor(name){
//         this.name = name;

//     }
//     toString(){
//         return(`Name of person: ${this.name}`);
//     }
// }

// class student extends person{
//     constructor(name,id){
//         super(name);
//         this.id = id;

//     }

//     toString(){
//         return(`${super.toString()},student ID : ${this.id}`);

//     }
// }

// let student1 = new student('Devraj',21);
// console.log(student.toString());


// encapsulation

class person{
    constructor(name,id){
        this.name= name;
        this.id = id;
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
        console.log(`name is ${this.name}, address is : ${this.add}`);
    }
}

let person1 = new person('surya',21);
person1.add_Address('delhi');
person1.getDetails();