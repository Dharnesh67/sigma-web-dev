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