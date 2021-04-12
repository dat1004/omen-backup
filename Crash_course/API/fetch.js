fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "User1",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error"));

//fetch request
function getUsers() {
  const response = fetch("https://reqres.in/api/users");

  console.log(response);
}

//Async Await function
async function getUsers() {
  const response = await fetch("https://reqres.in/api/users");

  console.log(await response.json());
}
