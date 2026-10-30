// var name;
// name = "John Doe";
// var age = 30;
// var isStudent = false;
// console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);

const Student = {
    // name: "Alice Johnson",
    // age: 22,
}
    Student.name = "Jane Smith";
    Student.age = 20;
console.log(`Student Name: ${Student.name}, Age: ${Student.age}`);
console.log(`${Student.age >= 20 ? 'Are you a Adult' : 'Are you a Minor'}`);

function HelloWorld() {
    console.log("Hello, World!");
}
HelloWorld();


// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Alice"));
const greet = (name) => {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));


function introduce(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
    // console.log(`My name is ${name} and I am ${age} years old.`);
}
console.log(introduce("Bob", 25));


// function circumference(radius) {
//     return 2 * Math.PI * radius;
// }
// console.log(`Circum is = ${circumference(5)}`);
const circumference = (radius) => {
    return 2 * Math.PI * radius;
}
console.log(`Circum is = ${circumference(5)}`);