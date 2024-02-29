// singleton
// object.create

// object literals

const mySum = Symbol("key")

const JsUser = {
    name: "Shreyash",
    "full name": "Shreyash Vidhate",
    [mySum]: "myKey",
    age: 21,
    email: "shreyash@gmail.com",
    isLoggedIn: false,
    lastLoginInDays: ["Monday", "Tuesday", "Wednesday"]
    
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySum]);

JsUser.email = "shreyash@google.com"
// Object.freeze(JsUser)
JsUser.email = "shreyash@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello Js User ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());