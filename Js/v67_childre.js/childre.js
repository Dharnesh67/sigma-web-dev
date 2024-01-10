let a=document.body.childNodes
console.log(a)
console.log(a[1]);
let b=document.body.firstChild
console.log(b)
let c=document.body.childNodes[1]
console.log(c)

console.log(c.firstElementChild);

c.lastElementChild.style.backgroundColor="green"
c.lastElementChild.style.color="red"
console.log(c.lastElementChild.parentElement);

let e=document.body.childNodes[1].children[1]
console.log(e);
