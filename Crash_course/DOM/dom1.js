//Examine the Document Object//

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = "Hello";
console.log(document.forms);
console.log(document.links);
console.log(document.images);

// Selector - getElementById//
console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title");
console.log(headerTitle);
headerTitle.textContent = "Hello";
headerTitle.innerText = "Goodbye";
headerTitle.innerHTML = "<h3>Hello</h3>";
headerTitle.style.borderBottom = "solid 3px #000";

// getElementsByClassName//
let items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
}

// getElementsBtTagName//
let li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "Hello2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";

for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "#f4f4f4";
}

// QUERYSELECTOR//
let header = document.querySelector("#main-header");
console.log(header);
header.style.borderBottom = "solid 4px #cccc";

let input = document.querySelector("input");
console.log(input);
input.value = "Hello World";

let submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

let item = document.querySelector(".list-group-item");
item.style.color = "red";

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "pink";

let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";

//QUERYSELECTORALL//
let titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = "Hello";

let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}

// Traversing the DOM//
let itemList = document.querySelector("#items");
//parentNode//
console.log(itemList);
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";

//parentElement//
console.log(itemList.parentElement);
itemList.parentElement.parentElement.style.backgroundColor = "#f4f4";

//childNodes//firstChild//lastChild//
console.log(itemList.childNodes);
console.log(itemList.firstChild);
console.log(itemList.lastChild);

//children//firstElementChild//lastElementChild//
console.log(itemList.children);
console.log(itemList.lastElementChild);
console.log(itemList.firstElementChild);

itemList.firstElementChild.style.backgroundColor = "yellow";
itemList.lastElementChild.textContent = "Hello";

//nextSibling//previousSibling//
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);

//nextElementSibling//previousElementSibling
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "Green";

//createELement//
let newDiv = document.createElement("div");
//Add Class
newDiv.className = "Hello";
//Add id
newDiv.id = "Hello1";
//Add attr
newDiv.setAttribute("title", "Hello Div");
//Create textNode
let newDivText = document.createTextNode("Hello World");
//Add text to Div
newDiv.appendChild(newDivText);
console.log(newDiv);

//Add newDiv to DOM
let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);

// Add event listener to Btn
function buttonClick(e) {
  //   console.log("Button Clicked");
  document.getElementById("header-title").textContent = "CHANGED";
  document.querySelector("#main").style.backgroundColor = "black";

  console.log(e);
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.classList);

  console.log(e.type);

  console.log(e.clientX);
  console.log(e.clientY);

  console.log(e.offsetX);
  console.log(e.offsetY);

  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
}

let button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

let button = document.getElementById("button");
let box = document.getElementById("box");

button.addEventListener("click", runEvent);
button.addEventListener("dblclick", runEvent);
button.addEventListener("mousedown", runEvent);
button.addEventListener("mouseup", runEvent);

box.addEventListener("mouseenter", runEvent);
box.addEventListener("mouseleave", runEvent);

box.addEventListener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent);

box.addEventListener("mousemove", runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector("form");
let select = document.querySelector("select");

itemInput.addEventListener("keydown", runEvent);
itemInput.addEventListener("keyup", runEvent);
itemInput.addEventListener("keypress", runEvent);

itemInput.addEventListener("focus", runEvent);
itemInput.addEventListener("blur", runEvent);

itemInput.addEventListener("cut", runEvent);
itemInput.addEventListener("paste", runEvent);

itemInput.addEventListener("input", runEvent);
select.addEventListener("change", runEvent);
form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE: " + e.type);

  console.log(e.target.value);
  document.getElementById("output").innerHTML = e.target.value;

  output.innerHTML =
    "<h5>MouseX: " + e.offsetX + " </h5><h5>MouseY: " + e.offsetY + "</h5>";
  box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}
