var root = null;
var useHash = true; // Defaults to: false
var hash = "#"; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on("/home", function () {
    console.log("youre at Homepage");
  })
  .resolve();

router
  .on("/about", function () {
    console.log("youre at About");
  })
  .resolve();

router
  .on("/contact", function () {
    console.log("youre at Contact");
  })
  .resolve();

router
  .on("/auth", function () {
    document.getElementById("app").innerHTML = "<auth-screen></auth-screen>";
  })
  .resolve();

router
  .on("/chat", function () {
    document.getElementById("app").innerHTML = "<chat-screen></chat-screen>";
  })
  .resolve();
window.router = router;
