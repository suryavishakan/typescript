// // arrays
// const fruits : string[] = ["apple", "mango"];
// const arr : number[] = [1, 2, 3, 4, 5];
// console.log(fruits, arr);

// // 
// const mixedArr : (string | number)[] = ["apple", "mango", 1, 2];
// console.log(mixedArr);

interface Person{
    firstName : string;
    age : number
}
const person : readonly Person[] = [
    {firstName : "Surya", age : 23},
    {firstName : "Bhuvan", age : 21}
]

console.log(person);

// array operations can't be performed when it is set to readonly