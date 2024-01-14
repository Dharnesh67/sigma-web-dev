function getrandom() {
    let c1 = Math.ceil(Math.random() * 200);
    let c2 = Math.ceil(Math.random() * 200);
    let c3 = Math.ceil(Math.random() * 200);
    return `rgb(${c2},${c1},${c3})`;
  }
  document.querySelector(".child").addEventListener("click", () => {
    // e.stopPropagation(); // stop event propagation
    alert("child clicked");
  });
  document
    .querySelector(".childcontainer").addEventListener("click", () => {
      e.stopPropagation(); // stop event propagation
      alert("childcontainer clicked");
    });
  document.querySelector(".container").addEventListener("click", () => {
    alert("container clicked");
  });
  setInterval(() => {
    document.querySelector(".childcontainer").style.background = getrandom();
    document.querySelector(".child").style.background = getrandom();
    document.querySelector(".container").style.background = getrandom();
 
  }, 3000); //3 second we can also use set time out


  setInterval(() => {
    document.body.style.background = getrandom();
  },5000)


  function mygreat() {
    let a=document.createElement("div");
    a.innerHTML="Happy coding";
    a.style.color="white";
    document.body.appendChild(a);
  }
  setTimeout(mygreat, 4000);
// document.addEventListener("mousemove", (e) => {
//   document.querySelector("a").style.background = `rgb(${e.offsetX},${e.offsetY},${e.offsetX})`;
// });