import Product from "./Product.js";

export default class Cloth extends Product {
  origin;
  material;

  constructor(id, name, price, manufacturer, importedDate, origin, material) {
    super(id, name, price, manufacturer, 0.05, importedDate);
    this.origin = origin;
    this.material = material;
  }
}
