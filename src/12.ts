// classes
class Animal{
    name : string;
    private age: number;
    readonly doing: string;
    isHungry : boolean = true; // class field
    protected myProtectedProperty: number =  1;
    constructor(name: string, age: number, doing: string){
        // console.log("constructor called");
        this.name = name;
        this.age = age;
        this.doing = doing;
        this.isHungry;
        console.log(this.myProtectedProperty);
    }
    hungerStatus() : string{
        return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`
    }
    get runStatus() : string{
        return `${this.name} runs at 10kmph`;
    }
    feed(food: string): void{
        this.isHungry = false;
        console.log(`${this.name} ate ${food} and is full`);
    }
}

class Dog extends Animal{
    breed : string;
    skills : string[];
    constructor(name: string, age: number, doing: string, breed : string, skills: string[]){
        super(name, age, doing)
        this.breed = breed;
        this.skills = skills;
    }
}

const mau = new Animal("Mau", 8, "mau is eating pedigree");
const mauu = new Dog("Bau", 10, "Bau is playing", "Labrador", ["come", "sit", "eat"]);

mau.name = "Mauu";
console.log(mau);
// console.log(mau.myProtectedProperty)// we can't use it like this
// mau.doing = "mau is playing";
// console.log(mau.age); // only accessible within class Dog
// console.log(mau.hungerStatus());

// if I want to access a method without (); - getters, setters
console.log(mau.runStatus);

// 
mau.feed("pedigree");
mau.hungerStatus();