// async function getdata() {
//   return new Promise((resolve) => {
//     let a = Math.random() * 10000;
//     setTimeout(() => {
//       console.log("INitializing hacking....");
//       let b = document.createElement("h2");
//       b.innerHTML = "Initializing hacking....";
//       document.querySelector(".box").appendChild(b);
//     }, a);
//     setTimeout(() => {
//       console.log("reading files ....");
//       let b = document.createElement("h2");
//       b.innerText = "reading files ....";
//       document.querySelector(".box").appendChild(b);
//     }, a + 3000);
//     setTimeout(() => {
//       let c = document.createElement("h2");
//       c.innerHTML = "password is 1234";
//       document.querySelector(".box").appendChild(c);
//     }, a + 5000);
//     setTimeout(() => {
//       let c = document.createElement("h2");
//       c.innerHTML = "Sending Files to server....";
//       document.querySelector(".box").appendChild(c);
//     }, a + 5000);
//     setTimeout(() => {
//       let c = document.createElement("h2");
//       c.innerHTML = "Cleaning up....";
//       document.querySelector(".box").appendChild(c);
//       return resolve("password is 1234");
//     }, a + 8000);
//   });
// }
// async function main() {
//   let data = await getdata();
//   console.log(data);
// }

// main();

const reandomdelay = () => {
  return new Promise((resolve, reject) => {
    timeout = Math.random() *4000;
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};
const additems = async (item) => {
  await reandomdelay();
  let c = document.createElement("h2");
  c.innerHTML = item;
  document.querySelector(".box").append(c);
};
async function main() {
  setInterval(() => {
    let last = document.querySelector(".box").lastElementChild;
    last.innerHTML=last.innerHTML+'--'
  }, 700);
  let arr = [
    "Initializing hacking",
    "Reading files",
    "Password is 1234",
    "Sending Files to server",
    "Cleaning up",
  ];
  for (const i in arr) {
    await additems(arr[i]);
  }
}
main();

