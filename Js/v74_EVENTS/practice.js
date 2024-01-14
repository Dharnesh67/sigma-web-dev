let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  btn.style.background = "red";
  btn.style.color = "white";
  let a = (document.querySelector(".box").innerHTML = "Hello you clicked me");
});
btn.addEventListener("dblclick", () => {
  alert("Hello you clicked me again");
});

btn.addEventListener("mouseout", () => {
  btn.style.background = "white";
  btn.style.color = "black";
  let a = (document.querySelector(".box").innerHTML = "I am a box");
});
btn.addEventListener("mousemove", () => {
  btn.style.background = "lightgreen";
  // btn.style.color="black";
});

// right click event triggered
btn.addEventListener("contextmenu", () => {
  alert("Hello you right clicked me");
});

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
 // Path: Js/v75_EVENTS/practice.js