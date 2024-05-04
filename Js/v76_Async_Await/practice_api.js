async function main(){
    let data =await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      
    console.log(data);
    let x=await data.json();
    console.log(x);
    let div =document.createElement('div');
    div.innerHTML=x;
    document.body.append(div);
}
main();