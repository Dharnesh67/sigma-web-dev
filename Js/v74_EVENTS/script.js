let btn = document.getElementById("btn")
btn.addEventListener("dblclick", () => {
    btn.style.backgroundColor = "red"
    document.querySelector(".box").innerHTML="Dont touch that button"
})
btn.addEventListener("click", () => {
    btn.style.backgroundColor = "green"
})
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
btn.addEventListener("contextmenu", () => {
   alert("why did u right clicked")
})
btn.addEventListener("mousemove", () => {
    btn.style.backgroundColor = "lightgreen"
})
btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "lightgreen"
})