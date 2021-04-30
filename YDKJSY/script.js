// Variable declaration
var adult = true;

if (adult) {
  var myName = "Kyle";
  let age = 39;
  console.log("This is a secret");
}

console.log(myName);
// Kyle
// console.log(age);
// Error

const myBirthday = true;
let age = 39;

if (myBirthday) {
  age = age + 1;
  //   myBirthday = false;
}

// 'var' declares regular/function scope variables
// 'let' declares block scope function {}
// 'const' is like 'let' but must be given a value when declaring & cannot be reassign

const actors = ["Morgan Freeman", "Jennifer Aniston"];

actors[2] = "Tom Cruise";
// OK :(
// actors = [];
// Error
// avoid using 'const' with object value, since those can still be changed eventhough the variable cannot be "re-assigned"
// 'const' decalred variables are not "unchangeble", they just cannot be "re-assign"
// 'const often used to assign useful name to a simple primative value

// Other systactic forms that declare identifiers(variables)
function hello(myName) {
  console.log(`Hello, ${myName}`);
}
hello("Kyle");
// hello is created in outer scope and references the function
// myName is created inside function's scope and thus only accessible there

try {
  someError();
} catch (err) {
  console.log(err);
}
// err is block-scoped variable exist only inside 'catch' clause

// FUNCTIONS
// function declaration
function awesomeFunction(coolThings) {
  return amazingStuff;
}

// function expression
let anotherAwesomeFunction = function (coolThings) {
  return amazingStuff;
};

//to return more value, can be wrapped into single object/array
let whatToSay = {
  gretting() {
    console.log("hello");
  },
  question() {
    console.log("What's your name?");
  },
  answer() {
    console.log("my name is Kyle");
  },
};
whatToSay.gretting();

// COMPARISON
let x = [1, 2, 3];
let y = x;

console.log(y === x);
console.log(y === [1, 2, 3]);
console.log(x === [1, 2, 3]);
// assignment is by reference-copy --> y references the same array as x not another copy of it
