const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

//FILTER
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);

//MAP
const itemNames = items.map((item) => {
  return item.name;
});

const itemPrices = items.map((item) => {
  return item.price;
});

console.log(itemNames);
console.log(itemPrices);

//FIND
const foundItem = items.find((item) => {
  return item.name === "Book";
});

console.log(foundItem);

//FOR EACH
items.forEach((item) => {
  console.log(item.price);
});

//SOME
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});

console.log(hasInexpensiveItems);

//EVERY
const hasFreeItems = items.every((item) => {
  return item.price == 0;
});

console.log(hasFreeItems);

//REDUCE
const total = items.reduce((currentTotal, item) => {
  return currentTotal + item.price;
}, 0);

console.log(total);

//INCLUDE
const nums = [1, 2, 3, 4, 5];

console.log(nums);

const includeTwo = nums.includes(2);
console.log(includeTwo);

const includeSeven = nums.includes(7);
console.log(includeSeven);
