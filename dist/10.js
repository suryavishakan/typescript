function addOrConcat(a, b, c) {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
}
// type casting
const addValue = addOrConcat(2, 3, "add");
const addValue2 = addOrConcat(2, 3, "add");
const concatValue = addOrConcat(2, 3, "concat");
console.log(addValue, typeof addValue);
console.log(addValue2, typeof addValue2);
console.log(concatValue, typeof concatValue);
export {};
