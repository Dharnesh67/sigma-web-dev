// let a=document.querySelector(".box").innerText
// let a=document.querySelector(".container").innerHTML
let a=document.querySelector(".container").innerText
console.log(a);


console.log(document.querySelector(".box").tagName)

// attribute
document.querySelector(".box").setAttribute("style","display:flex")
// console.log()
console.log(document.querySelector(".box").hasAttribute("style"))
document.querySelector(".box").removeAttribute("style")

console.log(document.querySelector(".box").attributes);
let b =document.createElement("div")
let c =document.createElement("div")
b.innerHTML="hello i am Appended"
c.innerHTML="hello i am Appended"
document.querySelector(".container").append(c);
document.querySelector(".container").prepend(b);

// adjacent insertion
let cont =document.querySelector(".container")
cont.insertAdjacentHTML("afterbegin","<b>Hello i am under the water here too much raining afterbegin </b>")
cont.insertAdjacentHTML("afterend","<b>Hello i am under the water here too much raining afterend </b>")
cont.insertAdjacentHTML("beforebegin","<b>Hello i am under the water here too much raining beforebegin</b>")
cont.insertAdjacentHTML("beforeend","<b>Hello i am under the water here too much raining beforeend</b>")

console.log("ALL THE CLASSES OF CONTAINER__  "+document.querySelector(".container").className);

document.querySelector(".container").classList.add("added")
document.querySelector(".container").classList.remove("red")


console.log("ALL THE CLASSES OF CONTAINER __"+document.querySelector(".container").className);
