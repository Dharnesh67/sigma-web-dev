let str = "hello world";
let arr = str.split("");
const mirror = (str) => {
  let newstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr;
};
str = mirror(str);
for (let i = 0; i < str.length; i++) {
  arr.push(str[i]);
}
console.log(arr.join(""));