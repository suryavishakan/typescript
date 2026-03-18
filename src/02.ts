// basic data types

// // string
// let firstName : string = "Surya Vishakan";
// console.log(firstName);

// // number
// let age : number = 23;
// console.log(age);

// // boolean
// let is18 : boolean = true;
// console.log(is18);

// type inference
// let name = "Surya";
// name = 12; // error - number is not assignable to type 'string'
// console.log(name);
// even if we don't mention type, ts has type inference


let firstName : string;
let age : number | string; // union type
let is18 : boolean;

firstName = "Surya";
age = 23; // age can be number or string
is18 = true;

