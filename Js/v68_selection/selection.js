let a = document.body.children

//get element by id
let b = document.getElementById('r')
b.style.color = "red"
b.style.backgroundColor = "cyan"


// class selection  
let c = document.getElementsByClassName("box")
console.log("C", c);

// console.log(c);
c[1].style.backgroundColor = "brown"


// query selector target the first element
document.querySelector(".box").style.backgroundColor = "magenta"


// query selectorAll
let d =document.querySelectorAll(".box");
console.log(d);
d[3].style.backgroundColor="green"
d[4].style.backgroundColor="#FFD580"


// get element by tag name

let e= document.getElementsByTagName("div")
console.log(e);
