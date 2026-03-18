// functions

// function declaration
// function add(a : number, b : number): number{
//     return a + b;
// }
// add(2, 3);

// function expression
// const add = function(a : number, b:number): number{
//     return a + b;
// }
// console.log(add(2, 3));

// arrow functions
// const add = (a: number, b: number): number => {
//     return a + b;
// }
// console.log(add(2, 3));


// 
// function greet(name: string): void{
//     console.log("hello,", name);
// }
// greet("Surya");


// conditional
// function greet2(name?: string): void{
//     console.log(`hello, ${name ?? "guest"}`);
// }
// greet2();


// default parameters
function greet3(name: string = "guest"): void{
    console.log(`hello, ${name}`);
}
greet3(); 