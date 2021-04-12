//calculator
let calculator = {
  read() {
    this.inputNum1 = prompt("Enter first value");
    this.inputNum2 = prompt("Enter second value");
    // console.log(inputNum1);
    // console.log(inputNum2);
  },
  sum() {
    return Number(this.inputNum1) + Number(this.inputNum2);
  },
  mul() {
    return this.inputNum1 * this.inputNum2;
  },
};

console.log(calculator);
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//New Calculator - Constructor
function Calculator() {
  (this.read = function () {
    this.input1 = +prompt("1st value?");
    this.input2 = +prompt("2nd value");
  }),
    (this.sum = function () {
      return this.input1 + this.input2;
    }),
    (this.mul = function () {
      return this.input1 * this.input2;
    });
}
let newCalculator = new Calculator();
console.log(newCalculator);
// newCalculator.read();

// console.log("Sum=" + newCalculator.sum());
// console.log("Mul=" + newCalculator.mul());

//New Accumulator - Constructor
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("How much to add?", 0);
  };
}
let accumulator = new Accumulator(1);
console.log(accumulator);

//ladder
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    console.log(this.step);
  },
};

console.log(ladder);
ladder.showStep();

//Ladder Chaining
let chainedLadder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};

console.log(chainedLadder);
