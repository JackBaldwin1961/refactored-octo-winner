// VARIABLES

var oldWay = "Using var";
let age = 32;
const country ="UK";
let isStudent = true;

// NAMED FUNCTION

function greet(name) {
    console.log("Hello " + name);
}

greet("Jack");

// ANONYMOUS FUNCTION

let sayGoodbye = function() {
    console.log("Goodbye");
};

sayGoodbye();

// IF ELSE STATEMENT

if (age > 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// SWITCH STATEMENT

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("End of the week.");
        break;
    default:
        console.log("Midweek.");
}

// ARRAY

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple

// LOOP THROUGH ARRAY

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}