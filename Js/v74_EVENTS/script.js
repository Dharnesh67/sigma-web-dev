let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.querySelector(".box").innerHTML = "hello";
});
btn.addEventListener("dblclick", () => {
  btn.style.backgroundColor = "RED";
});
btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "lightblue";
});
btn.addEventListener("contextmenu", () => {
  btn.style.backgroundColor = "green";
});
document.addEventListener("keydown", (e) => {
  let a = e.key;
  let div = document.createElement("div");
  div.innerHTML = a;
  document.body.append(div);
});
function getrandom() {
  let c1 = Math.ceil(Math.random() * 200);
  let c2 = Math.ceil(Math.random() * 200);
  let c3 = Math.ceil(Math.random() * 200);
  return `rgb(${c2},${c1},${c3})`;
}
setInterval(() => {
  document.body.style.backgroundColor=getrandom();
}, 2000);
