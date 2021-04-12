//making request
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve("Googel says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

//processing request
function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Info + ${response}`);
  });
}

// //call out functions by Promises
// makeRequest("Google")
//   .then((response) => {
//     console.log("Response Received");
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Async Await syntax
async function getUsers() {
  const response = await fetch("https://reqres.in/api/users");

  console.log(await response.json());
}

//AsyncAwaut method -> have it wrap into a function
async function doWork() {
  try {
    let response = await makeRequest("Google");
    console.log("Response Received");
    let processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
