// 1)
// let and const dono different hai, mtlb let makes a variables and const makes a constant 
// let and const makes a constant
// let and const are similar in few things : 
// let and const dono es6 se hai
// let and const dono khudko windo object mein add krte hai
// .................. braces scoped hai

// 2) Arrow functions
// OLD arrow funcs - 1) function statement 
//                   2) function expression
//                   3) anonymous func

// NEW arrow funcs - nayi js me ek prakar ka function hai jiska teem roop hai: 
// 1) basic fat arrow func
// var fnc = () => {}

// 2) fat arrow func with one parameter
// var b = param => {};
// b(12);

// 3) fat arrow func with implicit return
// var G = () => 12; // 12 will be return in G() 
// G();

// 3) templete literals backtick ``
// console.log(`Hey ${2+2} is ${2+2}`);

// 4) default parameters - jab aap value na de function param ko to wo default value le skte h
// function abcd(a=0,b=0,c=0){
//     console.log(a,b,c);
// }

// abcd(1,3)

// 5) rest and spread
// ... spread/rest but different working
// Spread ka mtlb hai element ke sare values ko us jagah pr bikher dena 
// spread use hota hai copy ya fir us location pr kisi aur ki values bikherne ke liye

// var a = [1,2,43,5,5,6,7,5];
// var b = a; // this is reference
// var b = [...a]


// rest use hota hai jb aako bache hue values ek variables me dalne ho
// function abcd(a,b,c,...d){
//     console.log(a,b,c,d);
// }
// abcd(1,2,3,4,5,6)

// 6) destructuring
// var a = [1,2,3];
// var [b,c] = a

// var obj = {name: "Shreyash", age: 21}
// var {age} = obj

