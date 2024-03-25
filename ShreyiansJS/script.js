// Basics of JS
// 1) var const let 

// 2) variables and constants

// code mein koi bhi data store karne ke liye ksika use hota h 
// usse kehte h variables

// 3) hoisting -> variables and functions are hoisted which means 
// there declaration is moved on the top of code
// console.log(a);  // undefine
// var a = 10;

// 4) types in js
// primitives and reference 

// primitives = number, string, null, undefined, boolean
// reference = [] () {}
// aisi koi bhi value jisko copy karne pr real copy in hota, 
// balki usme value ka reference pass ho jata h, usse hum reference value kehte hai, 
// aur jiska copy krne pr real copy ho jaye wo value primitive value hoti hai

// NOTE - Ye react me kaam ayega

// 5) conditionals -> if else else-if

// 6) loops - for, while [Loop ka mtlb repeat]
// for (let index = 0; index < array.length; index++) {
// }
// while (condition) {
    
// }
// 111111111
// 123456789


// 7) functions -> functions mainly teen kaam ke liye hote hai
//                 i) jab aapka code aap turnt nhi chalana chahte future mein chalana chahte ho
//                 ii) jab aap code chalana chahte ho har bar with diffrent data
// function ka mtlb aap kuch code ko likh ke koi naam de skte ho and bd main usey use kr skte ho with that name as many times
// function = code ko naam dena

// 8) params, arguments
// arguments = real value jo hum dete hai fn chalate waqt
// parameter = variables jinme value store hoti hai(argument wali)
// function abcd(params) {   // parameter   
//     console.log(params);
// }
// abcd("shreyash")  // argument

// 9) arrays = hum ek variables me ek value store kr pate hai pr jb hume ek se jyada value store krni ho tb fir use hota h array ka, 
// mtlb ki array aapko freedom deta h ek se jyda value use krne ki

// array = group of values

// 10) push pop shift unshift splice

// 11) Objects -> ek se jyada bande ki baat ki to hua array, 
// ek bande(ex - watch) ke baare me saari baat ki to hua object

// object hai ek bande ki details ko hold krna, in a key value pair

// 1) blank obj
// var a = {};

// // 2) filled obj & props and methods
// var a = {
//     age: 21,     ---> age is property
//     name: "Shreyash",  ---> name is property
//     email: "email@.com"  ---> email is property
//     kuchbhi: function(){} ---> kuchbhi is property and there function is called methods 
// }

// to access 
// console.log(a.age);

// 12) updating object properties
// a.age = 23;   ---> this will update the properties of object


// Advance topics in JS

// 1) the diffrence btw var, let, const & windows object

// var old js me tha 
// var functions scoped hota hai  => var apne parent fnc me kahi bhi use ho skta hai
// var adds itself to the window object

// function abcd() {
//     for (var i = 0; i < 12; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd();



// let const new js me hai
// let const braces scoped hota hai - {}
// let const does't adds itself in windows object


// 2) Browser context api --> ke andr include hota h 3 things => 1. window, stack, heap memory

// 3) stact

// 4) heap memory -> jitne bhi variables ya data hum banate hai unhe store krna pdta hai uske liye hota hai heap memory

// 5) execution context -> execution context is a container where the function's code is executed and it's created whenever a function is called, 
//    it contains 3 things, variables, functions, and lexical environment.

// ye jo container hai imaginary isse hi hum execution context kehte hai 

// 6) Lexical environment hota hai ek chart jisme ye likha hota hai ke aapka particular function ki chizo ko access kr skta hai and kinko nhi, 
//    mtlb ki it holds it's scope and scope chain. 

// 7) how to copy reference value  ----> by using spread operator
// Ex 1
// var arr = [1,2,3,4,5];
// var arr2 = [...a]
// Ex 2
// var obj = {name: "shreyash"}
// var copyObj = {...obj};

// 8) truty vs falsy
// js me kuch bhi likho wo mainly do prakaar me se kisi ek prakar ko belong krte hai truthy or falsy
// falsy values ye hai = 0, false, undefined, null, NaN, document.all
// truty values = rest all execpt falsy values

// Ex
// if(0){
//     console.log("hey");
// }else{
//     console.log("Hello");   it prints hello bcz 0 is falsy
// }
// 9) Switch
//  Ex
// switch (1) {
//     case 1:
//         break;
//     default:
//         break;
// }

// 10) forEach --> foreach loop sirf array pe chalta hai mtlb ki jb bhi tumhare pass ek array ho, 
//                 tb use me kun aata hai foreach loop
// foreach kabhi bhi by default aapke array me change nhi krta wo aapke changes krke deta hai array
//  ki temporary copy par jiske wajah se array hamesha same rehta hai

//  Ex
// var arr = [0,1,2,3,4,5]
// arr.forEach(element => {
//     console.log(element+1);
// });


// forin  -> objects pr loop krne ke liye hota hai forin loop
// var obj = {
//     name: "Shreyash",
//     age: 21,
//     city: "Nagpur"
// }

// for (var key in obj) {
//     console.log(key, obj[key]);
// }

// do-while
// var a = 12;
// do {
//     console.log("hey");
//     a++;
// } while (a<15);

// 11) callback functions
// aisa code jo baad  me chalta hai use hum ek function dedete hai ke bhaiya jb complete ho jayega tb ye function chala dena,
//  aur wo function jo hum dete hai wo ek normal function hi hota hai aur use kehte hai callback function

// setTimeout(() => {
//     console.log("I'm back");
// }, 2000);

// 12) first class function
// js me ek consept hai jiska mtlb hai ki aap function ko as a value use kr skte hai

// function abcd(a){
//     a();
// }
// abcd(function () {console.log("Hello");})

// 13) how arrays are made behind the scenes
// var arr = [1,2,3,4]
// why we can make negative indexes arrays in js
// arr [-1] = 2
// js will convert this array into objeck 
// arr = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
//     -1: 2
// }
// console.log(typeof arr);  // object

// Array.isArray([])
// true
// Array.isArray({}) 
// false

// 14) how to delete object props
// var a = {
//     name: "Shreyash",
//     age: 21
// }
// delete a.age;
// delete a.name;


// JavaScript Concepts

// 1) Higher order function
// function abcd(val) {        //abcd is hiher order function
    // return function(){}        // when we write clouser
// }
// abcd(function () {})

// Aisa function jo accept kr le ek aur function ya fir wo return krde ek aur function
// var arr = [1,2,3,4,5];
// arr.array.forEach(function(){});        // forEach is a Higher order function


// 2) constructor func
// Example
// function saanchaOfBiscuit(){
//     this.width = 12;
//     this.height = 22;
//     this.color = "Brown";
//     this.taste = "sugary";
// }
// var bis1 = new saanchaOfBiscuit();
// var bis2 = new saanchaOfBiscuit();
// var bis3 = new saanchaOfBiscuit();

 
// Example
// function circularButtonBnanao(color) {
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.pressable = true;
// }

// var redbtn = new circularButtonBnanao("Red");
// var greenbtn = new circularButtonBnanao("Green");

// Jab aapke paas aisa koi bhi mauka ho ke aapko ek jaisa properties wale bahut saare
// elements banane hai us waqt aap constructor func use kr skte ho

// 3) first class func
// Aise functions jo ki ek normal values ya fir variables ke tara treat kr ske usse first class functions kehte h

// setTimeout(function(){})

// 4) new keyword
// jab bhi new lagta hai hamesha ek blank object apne man me bna lo
// {}
// function abcd(){
//     this.age = 12;
// }

// new abcd()
// internal working
// {
//     age: 12;
// }

// 5) iife => immediately invoked function expression
// ex - gsap, etc..
// iife hai function ko turant chalane ki kaala, is tareeke se ki hum log koi private variable bana paye
 
// var ans = (function() {
//     var privateVal = 12;
//     return {
//         getter: function(){
//             console.log(privateVal);
//         },
//         setter: function(val){
//             privateVal = val;
//         }
//     }
// })()

// 6) prototype

// 7) Prototype inheritence
// var human = {
//     canFly: false,
//     canTalk: true,
//     hasFourLegs: false
// }

// var sheryiansStudents = {
//     canMakeAmazingWebsites: true,
//     canMakeAnimations: true
// }
 
// sheryiansStudents.__proto__ = human

// 8) this call apply bind
// this - 
// globle scope => jb bhi kuch likh rhe ho check kro kya usme kahi bhi koi function, 
// object ya fir scope bana hai = {}

// jab bhi koi chiz {} brackets ke andr nhi hoti to hum usse globle scope kehte hai
// var a = 12;
// in globle scope
// console.log(this);   // window

// in function scope
// function abcd(){
//     console.log(this);  // window
// }

// in method scope
// ek function jo object ke andr ho use method kehte hai
// var obj = {
//     name: "Shreyash",
//     value: function () {             // object
//         console.log(this);
//     }
// }
// obj.value();

// Conclusion
// globle => window
// function => window
// method => obj

// In any method, "this" keyword always refers to parent object

 // call apply bind