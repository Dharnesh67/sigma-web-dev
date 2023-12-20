

// console.log(color)
function getrandom(){
    let c1=Math.ceil(0+Math.random()*200)
    let c2=Math.ceil(0+Math.random()*200)
    let c3=Math.ceil(0+Math.random()*200)
    return `rgb(${c2},${c1},${c3})`
}
let Box=document.getElementsByClassName("box");
    Box[1].style.backgroundColor=getrandom();
    Box[2].style.backgroundColor=getrandom();
    Box[0].style.backgroundColor=getrandom();
    Box[3].style.backgroundColor=getrandom();
    Box[4].style.backgroundColor=getrandom();
    Box[5].style.backgroundColor=getrandom();
    Box[6].style.backgroundColor=getrandom();
    Box[7].style.backgroundColor=getrandom();
    Box[8].style.backgroundColor=getrandom();