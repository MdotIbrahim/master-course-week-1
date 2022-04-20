//Objects are containers that store data and functions. Key-value pairs used to store the data. dictionary from python?

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

person.favouriteSongs = ["song 3 replaces song 1 and 2"];

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

console.log(personTwo.sayHi());

//*Activity 2

const pet = {
    "name": "Phi",
    "typeOfPet": "Cat",
    "age": "2",
    "colour": "black and white",
    eat:() => { //!ERROR - arrow function version doesn't work
        return `${this.name} is eating`;      
    },
    drink(){
        return `${this.name} is drinking`;
    },
}

console.log(pet.eat());
console.log(pet.drink());

//*Activity 3 
// Create an object called coffeeShop with key values of:
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is ... with all
// items chosen with costs and total costs.

const coffeeShop = {
    "branch": "Earth",
    "drinksWithPrices": {"Fanta": "£0.99", "Coke": "£0.75"},
    "foodWithPrices": {"Burger": "£1.50", "Chips": "£0.99"},
    drinksOrdered(drinkP) {
        return`Your order is ${this.drinksWithPrices} and will cost ${this.drinksWithPrices[drinkP]}`; //!Error
    },
    foodOrdered(foodP) {
        return`Your order is ${this.foodWithPrices} and will cost ${this.foodWithPrices[foodP]}`;

    },
}

console.log(coffeeShop.drinksOrdered("Coke"));
console.log(coffeeShop.foodOrdered("Burger"));


//a solution

let coffeeShop2 = {
    branch: "thanks a latte",
    drinks: [
        ["Espresso", 1.50],
        ["latte", 2.70],
        ["flat White", 2.20]
    ],
    food:[
        ["scone", 1.50],
        ["bagel", 2.00],
        ["Sausage Muffin", 3.00]
    ], 

    total: 0,
    drinksOrdered: function (...items) {
        let drinkTotal=0;
        let validDrinks=[]
        if (items.length<1) {
            return 'please select a drink'
        }
        for (let i=0; i<items.length; i++) {
            for (let j=0; j<this.drinks.length; j++) {
                if (items[i] == this.drinks[j][0]){
                    this.total += this.drinks[j][1];
                    drinkTotal += this.drinks[j][1];
                    validDrinks.push(this.drinks[j][0])
                }
            }
        }
        if (validDrinks.length<1) {
            return 'please select a drink from the menu'
        }
        return `Here is your drink order: ${validDrinks.join(', ')} Drinks cost: £${drinkTotal.toFixed(2)}`
    },
    foodOrdered: function (...items) {
        let foodTotal=0;
        let validFood=[]
        if (items.length<1) {
            return 'please select some food'
        }
        for (let i=0; i<items.length; i++) {
            for (let j=0; j<this.food.length; j++) {
                if (items[i] == this.food[j][0]){
                    this.total += this.food[j][1];
                    foodTotal += this.food[j][1];
                    validFood.push(this.food[j][0])
                }
            }
        }
        if (validFood.length<1) {
            return 'please select a food from the menu'
        }
        return `Here is your food order: ${validFood.join(', ')} Food cost: £${foodTotal.toFixed(2)}`
    },
    getBill: function() {
        return `Total bill : £${this.total.toFixed(2)}`
}}

console.log(coffeeShop2.drinksOrdered("Espresso", "latte"));
console.log(coffeeShop2.foodOrdered("scone", "bagel"));