let name = "Shreyash"
let repoCount = 50

// Outdated way
// console.log(name + " " + repoCount + "value");

// Modern way 
console.log(`My name is ${name} and repo count is ${repoCount}`);


const gameName = new String("Morgan")

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

// const newString = gameName.substring(0, 6);
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   Shreyash  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "http://shreyash%20vidhate"

console.log(url.replace('%20', '-'));

console.log(url.includes('shreyash'));
