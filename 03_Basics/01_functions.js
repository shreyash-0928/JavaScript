// function sayMyName(){
//     console.log("S");
//     console.log("h");
//     console.log("r");
//     console.log("e");
//     console.log("y");
//     console.log("a");
//     console.log("s");
//     console.log("h");
// }

// sayMyName();

// function addNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addNumbers(10, 20);

// function addTwoNumbers(num1, num2){
//     return num1+num2
// }
// const result = addTwoNumbers(10, 20);
// console.log("Result:", result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
}
// console.log(loginUserMessage("Shreyash"));

// Spread operator or rest operator => (...num1)
function calculatePrice(val1, val2, ...num1){
    return num1
}

// console.log(calculatePrice(200,300,400, 500));   // [ 400, 500 ]

const user = {
    username: "Shreyash",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    username: "Sam",
    price: 300
})

const myNewArray = [1,2,3,4,5,6,7,8]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,300,400,500]));



// Anatomy of a function
// Let's break down the structure of a JavaScript function word by word:

// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// function: This is the keyword used to declare a function in JavaScript. It tells the interpreter that you are defining a new function.

// greet: This is the name of the function. You can choose any valid identifier as the function name. The name is used to call the function later in your code.

// (name): These are the parameters of the function. Parameters act as placeholders for values that you can pass into the function when you call it. In this case, the greet function takes one parameter, name.

// { }: These curly braces define the code block of the function. The actual instructions or statements to be executed when the function is called are placed inside these braces.

// console.log("Hello, " + name + "!");: This is the body of the function, where the actual code to be executed is written. In this example, the function uses console.log() to print a greeting message to the console, incorporating the value of the name parameter.
