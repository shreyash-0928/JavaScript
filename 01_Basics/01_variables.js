const accountId = 124355
let accountEmail = "shreyash@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //dont use always

let accountState;

// accountId = 2  // not allowed

accountEmail = "sheryash01@gmail.com"
accountPassword = "345678"
accountCity = "Nagpur"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and fuctional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])