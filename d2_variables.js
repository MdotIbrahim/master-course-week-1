//? this is a question
//! this is an error
// this is a regular comment
//TODO this needs implementing later

let text = "All around the World";
let letter = text.charAt(7).toUpperCase();

console.log(letter);
console.log(text.replace("u", letter));

// data stored in variables one at a time.

// dynamically typed language so dont need to speciify the type of data stored in variables.

// var is out of date usage of variables
// let, const used commonly

// var is function scoped whereas let and const are block scoped
// avoid var for this reason

//! OPERATORS

let i = 10;

i **= 2
console.log(i)

//* camelCase in JavaScript

//* template literals

// ` ${} - basically f string from python allowing to concatenate string with variables easily. ` (backtick) replaces ".

//* Activity 1

let username = "John";
let age = "21";
let favouriteColour = "Blue";

username = "Smith";

console.log(`His name is ${username}, he is ${age} years of age and he likes the colour ${favouriteColour}`);

//* Activity 2

function foodAte() {
    let breakfast = "nothing"
    let lunch = "nothing"
    let dinner = "nothing"

    console.log(`\nI ate ${breakfast} for breakfast, ${lunch}for lunch and ${dinner} for dinner.`)

    breakfast = "nothing again"
    lunch = "nothing again"
    dinner = "nothing again"

    console.log(`\nTomorrow i will eat ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`)
}
foodAte()

//* Activity 3

// const birthday = new Date('April 7, 2020 23:15:30'); 

// const time_birthday = birthday.getTime(); //time since 1970 in ms
// let time_now = Date.now() //time now since 1970 in ms

// time_difference = (time_now - time_birthday)/1000/60/60/24
// time_test = 365 - (time_difference % 365)
// console.log(`${time_difference} days old`);
// console.log(`${time_test} days left til your birthday.`);

const birthday = new Date('April 7, 2020 00:00:00'); 

const time_birthday = birthday.getTime(); //time since 1970 in ms
let timeNow = Date.now() //time now since 1970 in ms

timeDifference = Math.floor((timeNow - time_birthday)/1000/60/60/24)
time_test = 365 - (timeDifference % 365) //doesnt account for leap years thats why it was days off.
console.log(`${timeDifference} days old`);
console.log(`${time_test} days left til your birthday.`);

// Another method
let today =  new Date()
let birthday2 = new Date('2001, 4, 7')
let daysGone = today - birthday2
daysGone = Math.floor(daysGone / 1000/60/60/24)


console.log(today)
console.log(birthday2)
console.log(daysGone)


//* Activity 4

let space_1 = "X"
let space_2 = "O"
let space_3 = "X"
let space_4 = "X"
let space_5 = "O"

console.log("     |    |     ")
console.log(` ${space_1}   |  ${space_2} |    `)
console.log("     |    |     ")
console.log("----------------")
console.log("     |    |     ")
console.log(` ${space_3}   |  ${space_4} |    `)
console.log("     |    |     ")
console.log("----------------")
console.log("     |    |     ")
console.log(` ${space_5}   |    |    `)
console.log("     |    |     ")
