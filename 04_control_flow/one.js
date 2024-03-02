// if 

const isUserLoggedIn = true
const temperature = 41

// if(temperature === 40){
//     console.log("Temperature is less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }

console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`User Power is ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}