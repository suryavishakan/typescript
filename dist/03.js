// any
// any - should never be used
// it will ask the compiler to neglect type checking for someVariable 
let someVariable;
someVariable = 12;
// someVariable = "Spiderman";
console.log(someVariable);
// converts a number to a string, rounded to a specified number of decimals:
console.log(someVariable.toFixed(3));
console.log(typeof someVariable.toFixed(3));
// unknown
let someVariable2;
let booleanVariable;
someVariable2 = 12;
if (typeof someVariable2 === "number") {
    console.log(someVariable2.toFixed(3));
}
someVariable2 = true;
booleanVariable = someVariable2;
console.log(booleanVariable);
export {};
