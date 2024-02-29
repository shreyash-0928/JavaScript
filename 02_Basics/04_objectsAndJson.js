// Singleton Object
// const tinderUser = new Object()   

// Non-Singleton Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rakesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "regular@example.com",
    fullName: {
        userName: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}

// console.log(regularUser.fullName.userName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj5 = {obj1, obj2}
// console.log(obj5);         // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);            // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

console.log(Array.of(obj1, obj2, obj4));    
// [
//     { '1': 'a', '2': 'b' },
//     { '3': 'a', '4': 'b' },
//     { '5': 'a', '6': 'b' }
// ]


// Spread operator
const obj6 = {...obj1, ...obj2}
console.log(obj3);      // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]