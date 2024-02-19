let a = prompt("Enter the number 1");
let b = prompt("Enter the number 2");
if(isNaN(a)|| isNaN(b))
{
    alert("Invalid Input");
    location.reload();
}
let sum=Number(a)+Number(b);
let c =document.createElement("h2");
c.innerHTML=`The sum of ${a} and ${b} is ${sum}`;
document.querySelector(".container").appendChild(c);
console.log("The sum of "+a+" and "+b+" is "+sum);

function getrandom() {
    let c1 = Math.ceil(Math.random() * 200);
    let c2 = Math.ceil(Math.random() * 200);
    let c3 = Math.ceil(Math.random() * 200);
    return `rgb(${c2},${c1},${c3})`;
}
document.querySelector(".container").style.backgroundColor = getrandom();