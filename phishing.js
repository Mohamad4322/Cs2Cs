let btn = document.querySelector("button");
let box = document.querySelector("#box");

btn.addEventListener("click", (e) => {
  box.click();
});

box.addEventListener("click", (e) => {
  box.style.backgroundimage = URL("wrong.png");
});