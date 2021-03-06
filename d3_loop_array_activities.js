//* Activity 1

let filmsArray = ["film1", "film2", "film3", "film4", "film5", ];

filmsArray.push("film6", "film7");

for (let i = 0; i < filmsArray.length; i++) {
    console.log(filmsArray[i]);
}

//* Activity 2

for (let x = 0; x < 6; x++) {
    randomNum = Math.floor(Math.random()*50);
    console.log(randomNum);
}

//* Activity 3

for (let i = 9; i > -1; i--) {
    console.log(i);
}

//* Activity 4

let filmsArray2 = ["film 1", "film 2", "Ghostbusters", "film 4"];

// doesnt check if 3rd specifically is ghostbusters but the outcome is the same.
for (let i = 0; i < filmsArray2.length; i++) {
    console.log(filmsArray2[i]);
    if (filmsArray2[i] == "Ghostbusters") {
        console.log("Yay it's Ghostbusters");
    }
    else {
        console.log("Boo! we want Ghostbusters!");
    } 
}
//this way does
for (let i = 0; i < filmsArray2.length; i++) {
    console.log(filmsArray2[i]);
    if (i == 2) {
        if (filmsArray2[i] == "Ghostbusters") {
            console.log("Yay it's Ghostbusters");
        }
        else {
            console.log("Boo! we want Ghostbusters!");
        } 
    }

}

//* Activity 5

for (let x = 0; x < 6; x++) {
    randomNum = Math.floor(Math.random()*30);
    if (randomNum % 7 == 0) {
        console.log(`The number ${randomNum} is divisible by 7.`);
    }
    else {
        console.log(`The number ${randomNum} isn't divisible by 7.`);
    }
    console.log(randomNum);
}

//* Activity 6

let bobsFollowers = ["Ron77", "Paul3", "Mutual1", "Mutual2"];

let hannahsFollowers = ["Dave147", "David4", "Mutual1", "Mutual2"];

let mutualArray = [];

for (let x = 0; x < bobsFollowers.length; x++) {
    for (let y = 0; y < hannahsFollowers.length; y++) {
        if (bobsFollowers[x] == hannahsFollowers[y]) {
            mutualArray.push(bobsFollowers[x]);
            console.log(`Mutual follower: ${bobsFollowers[x]}`);
        }
    }
}console.log(mutualArray);

//METHOD TWO USING FOR OF

for(let item1 of bobsFollowers)
    for(let item2 of hannahsFollowers)
        if(item1 == item2)
            console.log(`Mutual follower: ${item1}`);
            mutualArray.push(bobsFollowers[x]);
console.log(mutualArray); 

//* Activity 7

// JavaScript supports different kinds of loops:

//     for - loops through a block of code a number of times
//     for/in - loops through the properties of an object
//     for/of - loops through the values of an iterable object
//     while - loops through a block of code while a specified condition is true
//     do/while - also loops through a block of code while a specified condition is true

// The do...while statement repeats until a specified condition evaluates to false. 

//The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);
