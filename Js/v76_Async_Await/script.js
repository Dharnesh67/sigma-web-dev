// Code: Async Await
// function getdata() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("done 404");
//     }, 4500);
//   });
// }
// console.log("before");

// let data = getdata();

// data.then((data) => {
//   console.log(data);
//   console.log("after");
// });
// // data.catch((err)=>{
// //     console.log(err)
// // })
async function getdata() {
  // async function returns promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done 404 after 4.5 sec");
    }, 4500);
  });
}
async function main() { // await use karne ke liye async function mei hona chahiye  
  console.log("before");
  let data = await getdata(); // await waits for promise to be resolved
  console.log(data);
}

//         data.then((data) => {
//   console.log(data);
//   console.log("after");
main();
