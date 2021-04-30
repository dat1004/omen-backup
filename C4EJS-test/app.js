// PROBLEM SOLVING
function findOppositeNumber(n, inputNumber) {
  if (inputNumber > n / 2) return inputNumber - parseInt(n / 2);

  return inputNumber + parseInt(n / 2);
}

console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));

function merge2String(str1, str2) {
  let string1 = str1.split("");
  let string2 = str2.split("");

  let mergedString = "";

  for (let i = 0; i < string1.length || i < string2.length; i++) {
    if (i < string1.length) mergedString += string1[i];
    if (i < string2.length) mergedString += string2[i];
  }
  return mergedString;
}

console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));

let tryNumber = 3;
const form = document.querySelector("form");
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// CODE CHALLENGE
const luckyNumber = getRandom(1, 10);
form.onsubmit = (event) => {
  event.preventDefault();
  const number = parseInt(form.number.value);
  if (!Number.isInteger(number) || number < 1 || number > 10) {
    alert("Vui lòng nhập lại");
  } else {
    tryNumber--;
    if (tryNumber > 0) {
      if (number == luckyNumber) {
        alert("Bạn đã đoán đúng");
        location.reload();
      } else {
        alert(`Bạn đã đoán sai! Bạn còn ${tryNumber} lần đoán!`);
      }
    } else {
      alert(`Bạn đã hết lượt!`);
      location.reload();
    }
    form.number.value = "";
  }
};
