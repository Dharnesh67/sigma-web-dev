// array are mutable in javascript
console.log(`Array Lecture`)
let arr=[1,2,3,4,5,6]
console.log(arr,typeof(arr))
console.log(arr.length)
console.log(arr[0])
arr[4]=99 // mutable
console.log(arr[3])
console.log(arr) 
console.log(arr.toString()) 
console.log(arr.join("==")) 
arr.push(2003)
arr.push("003")
console.log(arr) 
arr.shift()
arr.unshift(34)
console.log(arr)
delete arr[3]
console.log(arr )
let b =[2,3,4,5,6,67]
console.log(b.concat(arr))
console.log(b); 
b.splice(0,2,4000,3444,32)
console.log(b);
for (const i in b) {
       
        console.log(i);
}
for (const j of b) {
       
        console.log(j)
}


//mapping 
const newarr=b.map((ele)=>{return ele/1000});
console.log(newarr)
const fil  =(ele)=>{
    return (ele>0 && ele<1)
}
console.log(newarr.filter(fil));