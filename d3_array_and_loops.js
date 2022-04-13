//!ARRAYS
// array is like a list from python

let coffeeOrder = ["Alex - Cortado", 
"Ben - Cortado",
"Charlie - Whatever's new"];

console.log(coffeeOrder)

 //access individual items.
console.log(coffeeOrder[2]);

//update single item
coffeeOrder[1] = "Ann - Vanilla Latte";

console.log(coffeeOrder.length); //length is a property, not a method.
console.log(coffeeOrder)

// add new item to end of array
coffeeOrder.push("Donna - espresso");
console.log(coffeeOrder)

// remove final item
coffeeOrder.pop();

let coffeeOrderDictionary = {"Alex": "Cortado", 
"Ben": "Cortado",
"Charlie": "Whatever's new"};

console.log(coffeeOrderDictionary);

//*activity 1
musicArray = ["Song 1", "Song 2", "Song 3"];
console.log(musicArray);

musicArray.push("Song 4", "Song 5" ); // add two items to end of array
musicArray.pop(); // remove final item

console.log(musicArray);

//*activity 2
musicArray.unshift("Song New 1"); //add item to start of array.
console.log(musicArray);

musicArray.shift("Song New 1"); //remove first item
console.log(musicArray);

//splice functions lets you add and replace item in a list using the 3 paramters (3, 1, "song") replace 1 element at pos 3

//! For LOOPS

drinksArray = ["drink 1", "drink 2", "drink 3"];

console.log(drinksArray[0]);
console.log(drinksArray[1]);
console.log(drinksArray[2]);
//? the above is a very slow way to go through a list...imagine 1k

for (let i = 0; i < drinksArray.length; i++) {
    console.log(drinksArray[i]);
}

let multiplesThree = []

for (let i = 0; i < 20; i++) {
    if (i % 3 == 0 ){
        multiplesThree.push(i);
    }
}
console.log(`Numbers divisible by 3 between 0 and 20 are ${multiplesThree}`)

//TODO if following anything in a step by step process, top tip is to change the context of what you are recreating to show understanding.

//! While LOOPS

let age = 21

while (age > 11) {
    console.log("You're too old!");
    age--;
} console.log("You're no longer too old!")

console.log("You're no longer too old!")

let cards = ["Diamond", "Spade", "Club", "Heart"]
let currentCard = None
let wantedCard = cards[Math.floor(Math.random()*4)]
while (currentCard != wantedCard); { 
    currentCard = cards[Math.floor(Math.random()*4)]
    if (currentCard == "Spade") {
        console.log(`${currentCard} is the right suit.\n`)
    }
    else
    console.log(`${currentCard} is the wrong suit.\n`)
}