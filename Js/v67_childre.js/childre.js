let a=document.body.childNodes
console.log("A" || a)
console.log(a[1]);
let b=document.body.firstChild
console.log(b)
let c=document.body.childNodes[1]
console.log( c)
let d=document.body.children[0].children[1];
d.style.backgroundColor="red"
console.log(d);

console.log(c.firstElementChild);

c.lastElementChild.style.backgroundColor="blue"
c.lastElementChild.style.color="red"
console.log(c.lastElementChild.parentElement);

let e=document.body.childNodes[1].children[1]
console.log(e);
