import Product from "./Product.js";

export default class Household extends Product {
  durability;

  constructor(id, name, price, manufacturer, importedDate, durability) {
    super(id, name, price, manufacturer, 0.1, importedDate);
    this.durability = durability;
  }
}
