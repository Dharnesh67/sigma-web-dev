// console.log(color)
function getrandom(){
    let c1=Math.ceil(0+Math.random()*200)
    let c2=Math.ceil(0+Math.random()*200)
    let c3=Math.ceil(0+Math.random()*200)
    return `rgb(${c2},${c1},${c3})`
}
let color=getrandom();
let box=document.getElementsByClassName("box");
Array.from(box).forEach(e=>{
    console.log(e);
    e.style.backgroundColor=getrandom();
})