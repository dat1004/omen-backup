//Promises
let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("Promise resolved");
  } else {
    reject("promise failed");
  }
});

p.then((message) => {
  console.log("Promise fulfilled then " + message);
}).catch((message) => {
  console.log("This is the Catch " + message);
});

//Callback Function
let userLeft = false;
let userWatchingCatMeme = false;

function watchTutorialCallBack(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "Cat is better than you",
    });
  } else {
    callback("Like and Subcribe");
  }
}

watchTutorialCallBack(
  (message) => {
    console.log("success: " + message);
  },
  (error) => {
    console.log(error.name + "" + error.message);
  }
);

//Promise alternative
function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User watching Cat Meme",
        message: "Cat is better than you",
      });
    } else {
      resolve("Like and Subcribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log("success: " + message);
  })
  .catch((error) => {
    console.log(error.name + "" + error.message);
  });
