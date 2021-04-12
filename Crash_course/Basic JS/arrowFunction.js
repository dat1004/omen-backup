//multiple parameter
function sum(a, b) {
  return a + b;
}

let sumArrow = (a, b) => a + b;

//single parameter
function isPositive(number) {
  return number >= 0;
}

let isPositiveArrow = (number) => number >= 0;

//no parameter
function randomNumber() {
  return Math.random;
}

let radomNumberArrow = () => Math.random;

//anonymous function
document.addEventListener("click", function () {
  console.log("click");
});

document.addEventListener("click", () => console.log("click"));

//Redefine THIS keyword
class Person {
  constructor(name) {
    this.name = name;
  }
  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }
  printNameFunction() {
    setTimeout(function () {
      console.log("NormalFunction: " + this.name);
    }, 100);
  }
}

let person = new Person("Jeff");
person.printNameArrow();
person.printNameFunction();
