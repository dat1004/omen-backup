let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

//Form submit event
form.addEventListener("submit", addItem);
//Delete Event
itemList.addEventListener("click", removeItem);
//Filter Event
filter.addEventListener("keyup", filterItem);

//Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  let newItem = document.getElementById("item").value;

  //Create new li element
  let li = document.createElement("li");
  //Add class
  li.className = "list-group-item";
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create Delete btn element
  let deleteBtn = document.createElement("button");
  //Add class to delete btn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  //Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

//Remove Items
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    console.log(1);
    if (confirm("Are You Sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter Items
function filterItem(e) {
  //convert text to lowercase
  let text = e.target.value.toLowerCase();
  //get lis
  let items = itemList.getElementsByTagName("li");
  //convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
