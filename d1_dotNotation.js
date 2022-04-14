//dot notation

console.log("Hello World");
// displays something

//everything is an object and has properties allowing us to "run" them

// coding simplified, is about METHODS and DATA - Take something and do something with it.

//  data types:
// string, integers, floats, booleans - more commonly used.
//  null, undefined , symbols

// all data has properties and methods.

let myFirstVariable = "\n   I'm here";
let noGaps = myFirstVariable.trim();

console.log(myFirstVariable + "\n");
console.log(noGaps + "\n");

console.log("hello".toUpperCase());
// object has method used on it causing it to become upper case
console.log("hello".toUpperCase());

const ran_Num = Math.random()*10;

console.log(ran_Num);

console.log(Math.round(ran_Num));

console.log(Math.floor(ran_Num));
console.log(Math.ceil(ran_Num));
console.log(ran_Num.toFixed(2));

// activity

console.log("\n METHOD 1\n");

console.log("     |    |     ");
console.log("     |    |     ");
console.log("     |    |     ");
console.log("----------------");
console.log("     |    |     ");
console.log("     |    |     ");
console.log("     |    |     ");
console.log("----------------");
console.log("     |    |     ");
console.log("     |    |     ");
console.log("     |    |     ");

console.log("\n METHOD 2\n");

let grid = ["     |    |     ", "----------------"];

for (let i = 1; i < 10; i++) {
    console.log(grid[0]);
    if (i % 3 == 0 && i !== 9) {
        console.log(grid[1]);
    }
}

console.log("\n METHOD 3\n");

for (i = 1; i < 4; i++) {
    for (j = 1; j < 4; j++) {
        console.log(grid[0]);  
    }
    if (i < 3){
    console.log(grid[1]);
    }
}


// var is function scoped whereas let and const are block scoped
// avoid var for this reason