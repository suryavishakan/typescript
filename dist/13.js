// generics
// function myFunc(value : string | number): string | number{
//     if(typeof value === "string"){
//         return "hello world";
//     }
//     return 5;
// }
// console.log(myFunc("hello world"));
// identity function
// function myFunc(data: any){
//     return data;
// }
// const val = myFunc(5);
// console.log(typeof val);
// identity function with generics
// function identity<T>(data : T){
//     return data;
// }
// console.log(identity<string>("hello world"));
// console.log(identity<number>(5));
// identity function with constraints
function identity(data) {
    return data;
}
const val1 = identity("hello world");
const val2 = identity(5);
// const val3 = identity(true); this will give an error
function getFirstElement(arr) {
    return arr[0];
}
const val3 = getFirstElement(["apple", "mango", "grapes"]);
console.log(val3);
//  func('hello', 5) => [hello, 5]
function pairTypes(key, value) {
    return [key, value];
}
const name = pairTypes("Name", "Surya Vishakan");
const age = pairTypes("Age", 21);
console.log(name, age);
export {};
