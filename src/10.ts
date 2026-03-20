function addOrConcat(a: number, b: number, c: "add" | "concat"): number | string{
    if(c === "add"){
        return a + b;
    }
    return "" + a + b;
}

// type casting
const addValue : number = addOrConcat(2, 3, "add") as number;
const addValue2 : number = <number>addOrConcat(2, 3, "add");
const concatValue : string = addOrConcat(2, 3, "concat") as string;
console.log(addValue, typeof addValue);
console.log(addValue2, typeof addValue2);
console.log(concatValue, typeof concatValue);
