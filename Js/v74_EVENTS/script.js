let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    btn.style.backgroundColor = "red"
    document.querySelector(".box").innerHTML="Dont touch that button"
})