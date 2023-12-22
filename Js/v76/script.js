// function getdata(){
// return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(455)
//     }, 3000);
// })
// }
// async function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(404)
//         }, 5000);
//     })

//     let l= await getdata()

//     }
async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await x.json()
    //   console.log(data)
    return data;

}
async function main() {

    console.log("lsenfhw")
    let l = await getdata()
    console.log(l)
    console.log("done after 5 sec ")

}
main()
// console.log("loading ")
// console.log("do something ")
// console.log("load data ")
// let data=getdata()
// data.then((v)=>{
//     // after the promise will resolved the data will be fetched
//     console.log(data)
//     console.log("process ")
// })