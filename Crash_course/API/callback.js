const posts = [
  {
    title: " Post 1",
    body: "This is post 1",
  },
  {
    title: "Post 2",
    body: "This is post 2",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//Callback function
// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost({ title: "Post 3", body: "This is post 3" }, getPosts);

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

createPost({ title: "Post 3", body: "This is post 3" })
  .then(getPosts)
  .catch((err) => console.log(err));
