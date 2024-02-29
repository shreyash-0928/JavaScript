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
