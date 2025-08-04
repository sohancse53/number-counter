const count = document.getElementById("count");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

let cnt = 0;
plus.addEventListener("click", () => {
  count.innerText = ++cnt;
});

minus.addEventListener("click", () => {
  if (cnt <= 0) {
    cnt = 0;
    count.innerText = cnt;
    alert("crossing limit");
  } else {
    count.innerText = --cnt;
  }
});

reset.addEventListener("click", () => {
  cnt = 0;
  count.innerText = cnt;
});
