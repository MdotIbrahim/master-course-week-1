// === is strict so everything must match including type.
// == only data needs to be same and type doesnt matter

//! IF ELSE

if (1 == "1") { //since only checking if they are 1 . another equals (more strict) would make this false.
    console.log(true);
}
else{
    console.log(false);
}

// && means and so both conditions need to be met
// || means or so either condition can be met

//! SWITCH STATEMENTS

//use switch when theres many conditions that are formulaic and lack variety.

let fruit = "apple";
switch (fruit) { //value we want to check
    case "grape":
        console.log("grape!");
        break;
    case "orange":
        console.log("orange!");
        break;
    case "apple":
        console.log("apple!");
        break;
    default: //this is like else
        console.log("I don't like that fruit.")
}

//* Activity 1

let age = Math.floor(Math.random() * 100);
let country = "US";

console.log(age)
if (age > 17) {
    if (country == "UK") {
        console.log("Yes, I can serve you.");
    }
    else {
        console.log("I can't serve you if you're not from the UK")
    }
}
else {
    console.log("You aren't old enough.");
}

//* Activity 2

let pizzaTopping = "banana";

switch (pizzaTopping) { //value we want to check
    case "chicken":
    case "sweetcorn":
        console.log(`${pizzaTopping} is an important ingredients for my pizza.`);
        break;
    case "mushroom":
        console.log(`I don’t
        mind having ${pizzaTopping} on my pizza.`);
        break;
    case "pepperoni":
    case "banana":
        console.log(`${pizzaTopping}
        should not be on a pizza.`);
        break;
    default: //this is like else
        console.log("This is new. I'll try it.")
}

//* Activity 3

let password = "dhskjd3b";
let passwordList = [];

if (password.length < 8) {
    console.log("The password chosen is too short");
}
else {
    passwordList.push(password);
    console.log(passwordList);
    console.log("The password has been saved");
}

//* Activity 4

let num = Math.floor(Math.random() * 100);

if (num % 3 == 0 && num % 5 == 0) {
    console.log(`The number ${num} is divsible by 3 and 5.`);
}
else if (num % 3 == 0) {
    console.log(`The number ${num} is divsible by 3.`);
}
else if (num % 5 == 0) {
    console.log(`The number ${num} is divsible by 5.`);
}
else {
    console.log(`The number ${num} is not divsible by 3 or 5.`);
}

//* Activity 5 - FIZZ BUZZ

let num2 = 0
while (num2 < 16) {
    if (num2 % 3 == 0 && num2 % 5 == 0) {
        console.log("Fizz Buzz");
    }
    else if (num2 % 3 == 0) {
        console.log("Fizz");
    }
    else if (num2 % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(num2);
    }
    num2++;
}

//* Activity 6 - PALINDROME
let num3 = String(20002);
let numReverse = [];
Array.from(num3).forEach(function(character) {
    numReverse += character;
    console.log(numReverse);
    if (num3 === numReverse) {
        console.log("Palindrome");
    }
    else {
        console.log("Not a palindrome");
    }
    
});

//*METHOD TWO

let num3a = String(20002);
let numReverse2 = Number(String(num3a).split("").reverse().join(""));

if (num3a == numReverse2){
console.log(`${num} is a palindrome.`);
}
else {
    console.log(`${num} is not a palindrome.`);
}

//* Activity 7

let time = 7;
let placeOfWork = 8;
let townOfHome = 18;

if (time == 7) {
    console.log("Going to Work");
}
else if (time >= placeOfWork && time < townOfHome) {
    console.log("At work");
}
else if (time >= townOfHome || time <= 6) {
    console.log("At home");
}


//* Activity 8

const text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

let vowelList = [text.lastIndexOf("a"), text.lastIndexOf("e"), text.lastIndexOf("i"), text.lastIndexOf("o"), text.lastIndexOf("u")];

console.log(Math.max(...vowelList));

//* Activity 9

let word = "CodeNationC";

if (word[0] == word[word.length - 1]) {
    console.log(true);
}
else {
    console.log(false);
}

//* Activity 10
let i = 0
while (i < 5) {
    let num4 = Math.floor(Math.random() * 100);
    let num5 = Math.floor(Math.random() * 100);
    if ((num4 + num5) % 2 === 0) {
        console.log(`\n${num4} + ${num5} = ${num4 + num5} which is even`);
    }
    else {
        console.log(`\n${num4} + ${num5} = ${num4 + num5} which is odd...so let's multiply the numbers together instead: ${num4 * num5}`);
    }
    i++;
}