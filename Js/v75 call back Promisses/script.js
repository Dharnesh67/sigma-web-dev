console.log("hello1");
console.log("hello2");


setTimeout(() => {
  console.log("timeout in 5 second ");
}, 5000);


setTimeout(() => {
  console.log("timeout in 3 second");
}, 3000);



setTimeout(() => {
  console.log("timeout in 2 second");
}, 2000); // async


console.log("hello3");

function f() {
  console.log("f function");
}


const callback = (arg) => {
  console.log(arg);
  f();
  
};


const load = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = callback("script loaded");
  document.head.append(script);
};
load("https://www.codewithharry.com/", callback);
