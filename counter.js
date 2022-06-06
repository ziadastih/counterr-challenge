// assigining classes
const value = document.querySelector(".value");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

let count = 0;
// reset
reset.addEventListener("click", function () {
  count = 0;
  value.textContent = 0;
  //   if statement
  if (count > 0) {
    value.classList.add("value-positive");
  } else if (count < 0) {
    value.classList.add("value-negative");
  } else {
    value.classList.remove("value-positive");
    value.classList.remove("value-negative");
  }
});
// increase
increase.addEventListener("click", function () {
  count++;
  value.textContent = count;
  if (count > 0) {
    value.classList.add("value-positive");
  } else if (count < 0) {
    value.classList.add("value-negative");
  } else {
    value.classList.remove("value-positive");
    value.classList.remove("value-negative");
  }
});

// decrease
decrease.addEventListener("click", function () {
  count--;
  value.textContent = count;
  if (count > 0) {
    value.classList.add("value-positive");
  } else if (count < 0) {
    value.classList.add("value-negative");
  } else {
    value.classList.remove("value-positive");
    value.classList.remove("value-negative");
  }
});
