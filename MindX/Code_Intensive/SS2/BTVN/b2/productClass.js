export class Products {
  id;
  name;
  price;
  producer;
  discount;
  dateEnter;

  constructor(id, name, price, producer, discount, dateEnter) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.producer = producer;
    this.discount = discount;
    this.dateEnter = dateEnter;
  }
}

export class Houseware extends Products {
  durability;

  constructor(id, name, price, producer, dateEnter, durability) {
    super(id, name, price, producer, 10, dateEnter);
    this.durability = durability;
  }
}

export class Clothing extends Products {
  origin;
  material;
  constructor(id, name, price, producer, dateEnter, origin, material) {
    super(id, name, price, producer, 5, dateEnter);
    this.origin = origin;
    this.material = material;
  }
}

export class Food extends Products {
  taste;
  constructor(id, name, price, producer, dateEnter, taste) {
    super(id, name, price, producer, 20, dateEnter);
    this.taste = taste;
  }
}
