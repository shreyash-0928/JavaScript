// Primitive types
// 7 types : string, number, boolean, 
//           null, undefined, Symbol, BigInt

// We dont define language in javascript

// dynamically typed language
// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and
// can change throughout the program as we assign different values to them.

const score = 100
const score1 = 100.2
const isLoggedIn = false
const outSideTemp = null
let userEmail = undefined 
let userEmail1;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 1342567564758n



// Reference (Non Primitives)
// Array, Object, Functions

//Array
const heros = ["shaktimaan", "naagraj", "doga"]
// Object
let myObj ={
    name:"shryash",
    age: 22,
}
// Functions
// We can treat functions as variables
const myFunction = function(){
    console.log("I am a function");
}

// To check the dataType of a any object use typeof
console.log(typeof score);
console.log(typeof myFunction);
console.log(typeof heros);


// To Master JavaScript
//  Master objects and  Browser's web events or Browser events 

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-primitive)

// Stack gives Copy of  Origninal objects
let myName = "Shreyash";

let mySecondName = myName
mySecondName = "Morgan"

console.log(myName);
console.log(mySecondName);


// Heap gives Reference of Origninal objects
let userOne = {
    email : "user@example.com",
    upi : "user@sbi"
}

let userTwo = userOne

userTwo.email = "shreyash@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);