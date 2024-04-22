let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="hello";
});
btn.addEventListener("dblclick",()=>{
    btn.style.backgroundColor="RED"
})
btn.addEventListener("mouseout",()=>{
    btn.style.backgroundColor="blue"
})