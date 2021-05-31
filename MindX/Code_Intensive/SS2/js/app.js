// Viết chương trình quản lý thành viên trong gia đình
// Dữ liệu: thành viên trong gia đình: tên, tuổi, giới tính, vị trí, ăn, ngủ...

class Person {
  name;
  age;
  sex;
  role;

  constructor(_name, _age, _sex, _role) {
    this.name = _name;
    this.age = _age;
    this.sex = _sex;
    this.role = _role;
  }

  eat() {
    console.log("an gi do");
  }

  sleep() {
    console.log("ngu qua trua");
  }

  play(game) {
    console.log("choi " + game + " qua 180p");
  }

  introduce() {
    console.log(`
        Xin chao, ten toi la ${this.name}
        Nam nay toi ${this.age} tuoi
        Toi la ${this.role} trong gia dinh`);
  }
}

let father = new Person("Dad", 60, "Male", "father");
// father.name = "Dad";
// father.age = 60;
// father.sex = "Male";
// father.role = "father";

let mother = new Person("Mom", 50, "Female", "mother");
// mother.name = "Mom";
// mother.age = 50;
// mother.sex = "Female";
// mother.role = "mother";

console.log(father);
father.sleep();
father.play("PUBG");
father.introduce();

console.log(mother);

//extend from another class
class Boy extends Person {
  handsome;
  //ghi đè constructor của Person
  constructor(name, age, role, handsome) {
    //gọi constructor của Person bằng 'super'
    super(name, age, "Male", role);
    this.handsome = handsome;
  }

  racing(speed) {
    console.log("Di voi toc do " + speed);
  }
}

let badBoi = new Boy("Badboi", 20, "Being Bad", 11);
console.log(badBoi);
badBoi.play("Far Cry");

//Tao 1 class va cho vi du 3 object tuong ung
//Pet: name, age, species, furColor, Legs, sleep(), play()

class Pet {
  name;
  age;
  species;
  furColor;
  legs;

  constructor(_name, _age, _specices, _furColor, _legs) {
    this.name = _name;
    this.age = _age;
    this.species = _specices;
    this.furColor = _furColor;
    this.legs = _legs;
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  play() {
    console.log(`${this.name} is playing`);
  }
}

let bigDog = new Pet("Gau", 7, "dog", "brown", 4);
console.log(bigDog);

let smallDog = new Pet("Nhim", 3, "dog", "white", 4);
console.log(smallDog);

let hamster = new Pet("Hamu", 1, "hamster", "gray", 4);
console.log(hamster);
