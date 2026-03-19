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
// function greet3(name: string = "guest"): void{
//     console.log(`hello, ${name}`);
// }
// greet3(); 


// never return type
// throw error
// infinite loop
// function throwError(message : string): never{
//     throw new Error(message);
// }

// throwError("someting went wrong");


// function overloading
// function combine(a: number, b: number) : number;
// function combine(a: string, b: string) : string;
// function combine(a: number | string, b: number | string) : number | string{
//     if(typeof a === "number" && typeof b === "number"){
//         return a + b;
//     }else if(typeof a === "string" && typeof b === "string"){
//         return a + " " + b;
//     }else{
//         throw new Error("something went wrong");
//     }
// }

// console.log(combine("surya", "vishakan"));

// 
function greet() : string;
function greet(name : string) : string;
function greet(name?: string): string{
    return `hello, ${name ?? "guest"}`;
}

console.log(greet());