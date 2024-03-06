const user = {
    username: "Shreyash",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// console.log(user.welcomeMessage());


// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// We cant use this keyword in funtions
// Example 1
// function chai(){
//     let username = "Shreyash"
//     console.log(this.username);
// }

// chai()

// Example 2
// const chai = function() {
//     let username = "Shreyash"
//     console.log(this.username);
// }


const chai = () => {
    let username = "Shreyash"
    // console.log(this.username);
    // console.log(this);
}
// chai()

// Arrow function
//Note - 1. If we wrap in {} then we have to write return statement
//       2. If we wrap in () then we dont have to write return statement
// const addTwo = (num1, num2) => num1 + num2   // return ho rha h
// const addTwo = (num1, num2) => (num1 + num2) // () laga ke return kr diya

const addTwo = (num1, num2) => ({username: "Shreyash"})
console.log(addTwo(1,3));

const myArray = [1,2,3,4,5]
myArray.forEach()

// Arrow functions
myArray.forEach((element) => {
    console.log(element);
});