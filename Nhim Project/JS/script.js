const toggleBtn = document.querySelector(".toggle");
const navi = document.querySelector(".navigation");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  navi.classList.toggle("active");
});
