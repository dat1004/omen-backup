let $answer = document.getElementById("answers");
let $no = document.getElementById("no");

let count = 0;

$no.addEventListener("mouseenter", function () {
  $answer.classList.toggle("reverse");
  count++;
  if (count > 10) {
    $answer.remove();
  }
});

// import { helloByVietnamese } from "./hello.js";
// helloByVietnamese();

// import hello from "./hello.js";

// import hello, { helloByVietnamese, helloByLaos } from "./hello.js";
// hello();
// helloByVietnamese();
// helloByLaos();

import { PI } from "./hello.js";
console.log(PI);

import noNameFunction from "./hello.js";
noNameFunction();
