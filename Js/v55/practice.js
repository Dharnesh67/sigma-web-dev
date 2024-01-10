//type of Null in Js is Object
let a="dharmesh"
a=a+1
console.log(a)
console.log(typeof(a))

const myObject = {
    numberProperty: 42
  };
  
  console.log(myObject.numberProperty); // Outputs: 42
  
  // You can update the property of the object
  myObject.numberProperty = 55;
  myObject.number1Property = 515;
  
  console.log(myObject.numberProperty); // Outputs: 55
  console.log(myObject.number1Property); // Outputs: 55


//   In this example, myObject is declared using const, but we can still modify the value of the numberProperty within the object.

// However, if you want to completely change the object to hold a new number, you would need to create a new object or reassign the variable: