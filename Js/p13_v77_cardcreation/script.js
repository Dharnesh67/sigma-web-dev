function createcard(title, cname, views, months, duration, thumbnail) {
    // let tt =document.createElement("div");
    //     tt.innerHTML=title
    //   let a= document.querySelector(".container");
    //   a.append(tt);
    //     let cn =document.createElement("div");
    //     cn.innerHTML=cname
    //     let v =document.createElement("div");
    //     v.innerHTML=views
    //     let m =document.createElement("div");
    //     m.innerHTML=months+" months"
    // //   let b= document.querySelector(".container");
    //   a.append(cn);
    //   a.append(v);
    //   a.append(m);
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
    </div>
    <div class="text">
        <h1> ${title} </h1>
        <p> ${cname}. ${views} . ${months} months</p>
    </div>
    </div>`
    let tt = document.createElement("div");
    tt.innerHTML = html
    document.querySelector(".container").append(tt);
}
for (let i = 1; i <18; i++) {
    if (i % 2 == 0) { createcard("Sigma web dev video kanye is best", "code with harry", "300k", "1", "31:22", "https://i.ytimg.com/vi/Co0tTeuUVhU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDeppMQUiAio8HXUFL2k5mVk8KNwA")}
    else{
        if(i%3==0){
            createcard("Sigma web dev video #13","code with harry","100k","5","31:22","https://i.ytimg.com/vi/3otOOPEt1D4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA--v4aMl-_vfWd12FNtm-XSPeHWQsqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDeppMQUiAio8HXUFL2k5mVk8KNwA")
        }
        createcard("Sigma web dev video #11","code with harry","560k","7","31:22","https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgwsqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDeppMQUiAio8HXUFL2k5mVk8KNwA")
    }  };
