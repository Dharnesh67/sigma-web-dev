async function getdata() {
  return new Promise((resolve) => {
    let a=Math.random()*10000;
    setTimeout(() => {
      console.log("INitializing hacking....");
      let b=document.createElement("h2");
      b.innerHTML="INitializing hacking....";
      document.querySelector(".box").appendChild(b);
    }, a);
    setTimeout(() => {
      console.log("reading files ....");
      let b=document.createElement("h2");
      b.innerText="reading files ....";
      document.querySelector(".box").appendChild(b);
    },a+ 2000);
    setTimeout(() => {
       let c=document.createElement("h2");
      c.innerHTML="password is 1234";
      document.querySelector(".box").appendChild(c);
      return resolve("password is 1234");
     
    },a+ 3000);
  });
}
async function main() {
  let data = await getdata();
  console.log(data);
}

main();
