const fs=require('fs');
console.log('start');
console.log(fs);

fs.write('file.txt','Hello World',()=>{
    console.log('file written');
});

console.log('end');