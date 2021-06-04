import { Products, Houseware, Clothing, Food } from "./productClass.js";

class ProductsManager {
  stock = [];
  sale = 0;

  add(product) {
    if (product instanceof Products) {
      this.stock.push(product);
    } else {
      console.log("product not instance of Products");
    }
  }

  goodSold(product) {
    let sellingPrice = product.price - (product.price * product.discount) / 100;
    this.sale += sellingPrice;
    for (let i = 0; i < this.stock.length; i++) {
      if (this.stock[i].id === product.id) {
        this.stock.splice(i, 1);
      }
    }
  }

  getRevenue() {
    console.log(this.sale);
  }
}

let cooker = new Houseware(1, "Cooker", 5000000, "Cuccoo", "01/06/2021", "8");
let jeans = new Clothing(
  2,
  "Jeans",
  2000000,
  "Levis",
  "02/06/2021",
  "Laos",
  "demi"
);
let beef = new Food(3, "Beef", 40000, "Cow", "03/06/2021", "good");

console.log(cooker);
console.log(jeans);
console.log(beef);

let productManager = new ProductsManager();

productManager.add(cooker);
productManager.add(jeans);
productManager.add(beef);

console.log(productManager);

productManager.goodSold(cooker);
productManager.goodSold(jeans);
productManager.goodSold(beef);

console.log(productManager);

productManager.getRevenue();
