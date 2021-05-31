class Person {
  name;
  age;
  favorites;

  constructor(name, age, favorites) {
    this.name = name;
    this.age = age;
    this.favorites = favorites;
  }

  eat() {
    console.log("is eating");
  }

  sleep() {
    console.log("is sleeping");
  }
}

class Boy extends Person {
  handsome;
  girlFriend;

  constructor(name, age, favorites, handsome, girlFriend) {
    super(name, age, favorites);
    this.handsome = handsome;
    this.girlFriend = girlFriend;
  }

  cook() {}
  work() {}

  setGirlFriend(girlFriend) {
    if (girlFriend instanceof Girl) {
      this.girlFriend = girlFriend;
    } else {
      console.log("truyen tham so dieu");
    }
  }
}

class Girl extends Person {
  beauty;
  boyFriend;
  constructor(name, age, favorites, beauty, boyFriend) {
    super(name, age, favorites);
    this.beauty = beauty;
    this.boyFriend = boyFriend;
  }

  cook() {}
  shopping() {}

  setBoyFriend(boyFriend) {
    if (boyFriend instanceof Boy) {
      this.boyFriend = boyFriend;
    } else {
      console.log("truyen tham so dieu");
    }
  }
}

class GoodBoy extends Boy {
  good;
  constructor(name, age, favorites, handsome, girlFriend, good) {
    super(name, age, favorites, handsome, girlFriend);
    this.good = good;
  }

  doSomething() {}
}

class BadBoy extends Boy {
  bad;
  constructor(name, age, favorites, handsome, girlFriend, bad) {
    super(name, age, favorites, handsome, girlFriend);
    this.bad = bad;
  }

  racing(speed) {}
}

class GoodGirl extends Girl {
  timeAtHome;
  constructor(name, age, favorites, beauty, boyFriend, timeAtHome) {
    super(name, age, favorites, handsome, boyFriend);
    this.timeAtHome = timeAtHome;
  }
}

class PlayGirl extends Girl {
  playWhat;
  constructor(name, age, favorites, beauty, boyFriend, playWhat) {
    super(name, age, favorites, beauty, boyFriend);
    this.playWhat = playWhat;
  }
}

let gb1 = new GoodBoy("Goodboi 1", 20, ["em an com chua"], 10, null, 11);
let pg1 = new PlayGirl("Play Gon", 21, ["choi qua 180p"], 8, null, "pubg");

gb1.setGirlFriend(pg1);
pg1.setBoyFriend(gb1);

console.log(gb1);

//Getter vs Setter
class Human {
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set Age(age) {
    if (age > 0 && age < 100) {
      this.age = age;
    } else {
      console.log("Dieu");
    }
  }
}

let hooman = new Human("De", "Mai tinh", 25);
console.log(hooman.fullName);
hooman.Age = 18;

console.log(hooman.age);
