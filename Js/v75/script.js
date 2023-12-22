
console.log("hello")
console.log("hello")
setTimeout(() => {
    console.log("timeout")
}, 0);
setTimeout(() => {
    console.log("timeout2")
}, 0);

console.log("hello")
const callback = (arg) => {
    console.log(arg)
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("HARRY")
    document.head.append(sc)
}
