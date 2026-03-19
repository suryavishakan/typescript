interface Address{
    country : string,
    zipcode : number,
    houseNumber : string,
    city : string, 
    state : string
}

interface Person{ // we can't do this with type
    firstName : "Surya",
    lastName : "Vishakan",
    age ?: 23,
    address ?: Address,
}


export {Person, Address};