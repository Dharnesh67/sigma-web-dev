const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.get('/', (req, res) => { 
    let html=` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, libero cupiditate voluptates cum ab eaque aspernatur esse vel. Earum ducimus nesciunt optio fuga quidem fugiat consequuntur blanditiis magni aut. Fugit?`;   
    res.render('index', {foo: 'World',html:html});
} 
);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//github.com/mde/ejs/wiki/Using-EJS-with-Express