// type - can be used for objects, arrays, tuples and primitive data types
// type Person = {
//     firstName : string,
//     lastName : string,
//     age : number,
//     is18: boolean
// }

// const person : Person = {
//     firstName : "Surya",
//     lastName : "Vishakan",
//     age : 23,
//     is18 : true
// }


// interface - can be used only with objects
import {Person as BasePerson} from "./interfaces";

// interface Person extends BasePerson{
//     height : number
// }

type Person = BasePerson & {
    height : number
}

const person : Person = {
    firstName : "Surya",
    lastName : "Vishakan",
    age : 23,
    // is18 : true
    address : {
        country : "india",
        zipcode : 600095,
        houseNumber : "A-G3",
        city : "chennai",
        state : "tamil nadu"
    },
    height : 178
}

console.log(person.address);
