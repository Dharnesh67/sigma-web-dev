// let obj ={

//     name:"Rahul",
//     age:20,
//     address:{
//         city:"Bangalore",
//         state:"Karnataka"
//     },
// }
// console.log(obj)
// let animal={
//     eats:"CARROT",
// }
// let rabbit={
//     jumps:"true",
// }
// rabbit.__proto__=animal; //rabbit object inherits from animal object {prototype chaining}

class animal {
  constructor(name='Nan', age='20404904801') {
    this.name = name;
    this.age = age;
    console.log(name);
    console.log(age);
  }
  ismayank() {
    return this.name == "mayank";
  }
  isAdult() {
    return this.age >= 18;
  }
}

let a=new animal('mayank',9);
let b=new animal('ma');
console.log(a.ismayank())
console.log(a.isAdult())
console.log(b.name)
console.log(b.age)



