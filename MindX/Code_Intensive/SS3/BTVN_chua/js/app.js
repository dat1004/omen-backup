import Person from "./person.js";
import Community from "./comunity.js";

let personA = new Person("Ng Van A", "0123456", { x: 1, y: 1 });
let personB = new Person("Ng Thi B", "0123457", { x: 2, y: 1 });
let personC = new Person("Tran Van C", "0123458", { x: 5, y: 3 });
let personD = new Person("Le Thi D", "0123459", { x: 2, y: 4.5 });
let personE = new Person("Ha Van E", "0123450", { x: 1, y: 2 });

let community = new Community();

community.addPerson(personA);
community.addPerson(personB);
community.addPerson(personC);
community.addPerson(personD);
community.addPerson(personE);

community.setInfected("0123456");
community.getNearPeople(personA);

console.log(community);
