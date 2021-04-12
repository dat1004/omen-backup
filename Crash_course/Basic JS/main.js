// String, Numbers, Boolean, null, undefined
const name = "John";
const age = 30;

console.log(typeof name);

//concatenation

//Arrays - variable that hold multiple values
const fruits = ["apple", "orange", "pears"];

fruits[3] = "grapes";

fruits.push("mango"); //push to the end

fruits.unshift("strawberry"); //add at the begining

fruits.pop; //delele the last

console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf("orange"));

//Object
const person = {
  firtName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person.hobbies[1]);

const {
  fistName,
  lastName,
  address: { city },
} = person; // deconstucturing
console.log(city);

person.email = "whatever@email.com";
console.log(person);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Detist appt",
    isCompleted: false,
  },
];

console.log(todos);

//Convert to JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//For Loop
for (let i = 0; i < 10; i++) {
  console.log(`For Loop No. ${i}`);
}

//While Loop
let i = 0;
while (i < 10) {
  console.log(`While Loop No. ${i}`);
  i++;
}

// Loop through an Array
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for (let todo of todos) {
  console.log(todo.text);
}

//forEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted === true;
});
console.log(todoCompleted);

const todoCompleted2 = todos
  .filter(function (todo) {
    return todo.isCompleted2 === true;
  })
  .map(function (todo) {
    return todo.text;
  });

//Conditional - Turnery opertation
const x = 9;

const color = x > 10 ? "red" : "blue"; //if x > 10 (?) then set x to red (:)else set it to blue

//valuate color with "Switch"
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

//Arrow Function
const addNums = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums(5, 5));

//Object oriented programing
//Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

//Class
class Person2 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//Instantiate obj
const person1 = new Person("John", "Doe", "4-3-1990");
const person2 = new Person("Mary", "Sue", "3-6-1990");

console.log(person1.getFullName());
