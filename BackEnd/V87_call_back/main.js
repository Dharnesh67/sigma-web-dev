import fs from 'fs';
console.log('start');
console.log(fs);

fs.writeFile('file.txt','Hello World',()=>{
    console.log('file written');
});
fs.appendFile('file.txt',' Hello Dharmesh',(e,d)=>{
    console.log(d);
});
fs.appendFile('file.txt',' this is another string appended',(e,d)=>{
    console.log(d);
});
fs.readFile('file.txt','utf8',(e,d)=>{
    console.log(d);
});
console.log('end');