let a = [1, 2, 3, 4, 5]
let a1 = [1, 2, 3, 4, 5]
// a.concat(a1)
console.log(a.concat(a1)) // sirf printing me chalega existing array ko change nhi karega
console.log(a.splice(2, 1, 3, 44)) // position  numberofelementtoremove elementstobeadded
console.log(a)
console.log(a.slice(2, 5))

//foreach loop
// a.forEach((value,index,arr) => {
//     console.log(value,index,arr);
// });

//for  of loop
for (const i of a) {
    console.log(i);
}

//mapping technique
const b = [1, 2, 3, 4, 5, 6]
let c = b.map((i) => { return 2 ** i; })
console.log(c);

// filter property works with custom function
const grtthan8 = (i) => {
    if (i > 8) return true 
    else return false
}
console.log(c.filter(grtthan8));

//for finding sum multiplication and other operations on array we use reduse function
const red=(a,b)=>{return a+b}
console.log(b.reduce(red));
