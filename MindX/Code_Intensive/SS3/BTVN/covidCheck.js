import Person from "./person_class.js";

class Persons {
  persons;
  covidPersons;
  closeContact;

  constructor() {
    this.persons = [];
    this.covidPersons = [];
    this.closeContact = [];
  }

  add(person) {
    if (person instanceof Person) {
      this.persons.push(person);
    } else {
      console.log("person not instance of Person");
    }
  }

  show() {
    console.log(this.persons);
  }

  addInfected(person) {
    for (let i = 0; i < this.persons.length; i++) {
      if (this.persons[i].isCovid == "positive") {
        this.covidPersons.push(person);
      } else {
        console.log("person not infected");
      }
    }
  }
}

let A = new Person("Ng Van A", "0123456", 1, 1, "positive");
let B = new Person("Ng Thi B", "0123457", 2, 1, "negative");
let C = new Person("Tran Van C", "0123458", 5, 3, "negative");
let D = new Person("Le Thi D", "0123459", 2, 4.5, "negative");
let E = new Person("Ha Van E", "0123450", 1, 2, "negative");

let personsCollection = new Persons();

personsCollection.add(A);
personsCollection.add(B);
personsCollection.add(C);
personsCollection.add(D);
personsCollection.add(E);

personsCollection.addInfected(A);
personsCollection.show();

console.log(personsCollection.persons[0].isCovid);
