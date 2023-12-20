function fact(a){
    if(a===1) return 1;
    return a*fact(a-1);
}
let a=6;
console.log(a);
console.log(fact(a));
for(let i =a-1;i>=1;i--){
    a*=i;
}
console.log(a);
function factorial(a){
    let arr =Array.from(Array(a+1).keys())
    // console.log(arr.slice(1,));
    let c=arr.slice(1,).reduce((a,b)=> a*b)
    return c;
}
console.log(factorial(6));