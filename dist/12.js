// classes
class Animal {
    name;
    age;
    doing;
    isHungry = true; // class field
    myProtectedProperty = 1;
    constructor(name, age, doing) {
        // console.log("constructor called");
        this.name = name;
        this.age = age;
        this.doing = doing;
        this.isHungry;
        console.log(this.myProtectedProperty);
    }
    hungerStatus() {
        return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
    }
    get runStatus() {
        return `${this.name} runs at 10kmph`;
    }
    feed(food) {
        this.isHungry = false;
        console.log(`${this.name} ate ${food} and is full`);
    }
}
class Dog extends Animal {
    breed;
    skills;
    constructor(name, age, doing, breed, skills) {
        super(name, age, doing);
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
export {};
