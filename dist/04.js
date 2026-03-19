// functions
function greet(name) {
    return `hello, ${name ?? "guest"}`;
}
console.log(greet());
export {};
