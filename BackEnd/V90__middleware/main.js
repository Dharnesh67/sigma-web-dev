const express=require('express');
const app=express();
const port =3000;
const fs=require('fs');
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/starting',(req,res)=>{
    res.send('Hello World');
});
app.use((req,res,next)=>{
    let dateObj = new Date(Date.now() * 1000); // Convert the passed timestamp to milliseconds
    let utcString = dateObj.toUTCString();
    let time = utcString.slice(-11, -4);
    fs.appendFileSync('log.txt',`${time} is a ${req.method} request\n`);
    console.log(`${time} is a ${req.method}`);
    next();
});
app.use((req,res,next)=>{
    console.log('404 Page Not Found');
    // res.send('404 Page Not Found');
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})