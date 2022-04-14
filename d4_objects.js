//Objects are containers that store data and functions. Key-value pairs used to store the data.

const person = {
    "name": "John",
    "username": "John77",
    "age": 99,
}

//object.property - property gives the value provided by the key.

console.log(person.name);
console.log(person["age"]); //this is how its accessed in python

//second way allows varibales to be passed in changing outcome depending on the code:

let selectedOption

if (false) {
    selectedOption = "name";
}else {
    selectedOption = "username";
}
console.log(person[selectedOption]);

//objects are mutable

person["favouriteSongs"] = ["song 1", "song 2"];

person.favouriteSongs = ["song 3 replaces song 1 and 2"]

console.log(person["favouriteSongs"]);

//"this" means inside this current object.

//*Activity 1

const personTwo = {
    "name": "Smith",
    "username": "Smith88",
    "age": 29,
    sayHi() {
        return `Hello my name is ${this.username}`;
    },
}

console.log(personTwo.sayHi())

//*Activity 2

const pet = {
    "name": "Phi",
    "typeOfPet": "Cat",
    "age": "2",
    "colour": "black and white",
    eat:() => { //!ERROR
        return `${this.name} is eating`          
    },
    drink(){
        return `${this.name} is drinking`
    },
}

console.log(pet.eat())
console.log(pet.drink())

//*Activity 3

const coffeeShop = {
    "branch": "Earth",
    "drinksWithPrices": {"Fanta": "£0.99", "Coke": "£0.75"},
    "foodWithPrices": {"Burger": "£1.50", "Chips": "£0.99"},
    drinksOrdered(drinkP) {
        return`Your order is ${this.drinksWithPrices} and will cost ${this.drinksWithPrices[drinkP]}` //!Error
    },
    foodOrdered(foodP) {
        return`Your order is ${this.foodWithPrices} and will cost ${this.foodWithPrices[foodP]}`

    },
}

console.log(coffeeShop.drinksOrdered("Coke"))
console.log(coffeeShop.foodOrdered("Burger"))