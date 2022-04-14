//Functions

//break code into smaller reusable parts.

//! Arrow Functions - modern less wordy way
let stopA = 5 // if function doesnt have parameter, only then will it look for the variable in global scope... that is if they have the same name which they shouldnt.

const pressGrindBeans = (startP, stopP) => { //parameter comes from the argument
    console.log(`Grinding for ${startP} seconds and then stopping for ${stopP} seconds.`);
}

pressGrindBeans(startA=10, stopA=20); //argument

//! Function Declarations - this way is like python
function square(number) {
    return number * number;
}

square(5);

//! Function Expressions - hybrid older version

const square2 = function(number) {
    return number * number;
}
square2(7)

//* Activity 1

const factorial = (n) => {
    if ((n=== 0) || (n === 1)) {
        return 1;
    }else {
        return (n * factorial(n-1)); // function chains inside iself until it reaches 1. 33! = 33 x 32 etc
    }
}

console.log(factorial(33));

//* Activity 2

let orderCount = 0;

const takeOrder = (topping) => {
    console.log(`Pizza with ${topping}`);
    orderCount++;
    console.log(`You have ordered ${orderCount} times`)
}

takeOrder("pineapple", orderCount);
takeOrder("chicken", orderCount);

//* Activity 3
let pin = 1234;
let balance = 10000;
let attempts = 0;
const cashMachine = () => {
    const pinCheck = (pinInserted) => {
        if (pinInserted == pin) {
            console.log("The pin was correct\n");
            withdrawFunction(1000); // enough in balance
            withdrawFunction(10000); //not enough in balance
        }else {
            console.log("The pin was incorrect");
            attempts += 1;
            if (attempts < 3) {
                pinCheck();
            }else {
                console.log("\nYour card has been declined. Contact your bank for more information.");
            }
        }
    }

    const withdrawFunction = (withdrawAmount) => {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            console.log(`Take the £${withdrawAmount} and your card. Remaining balance: £${balance}\n`);
        }else {
            console.log("Not enough money in account to withdraw requested amount.\n");
        }
    }

    console.log("\nActivity 3\n\nInsert your card.");
    pinCheck(1234); // correct
    pinCheck(4321); //incorrect
}
cashMachine();

console.log(balance);

