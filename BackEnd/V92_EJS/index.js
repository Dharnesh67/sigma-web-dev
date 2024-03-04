const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  let name="Saurabh Kumar";
  let Blog="Passes By Value and Passes By Reference in JavaScript";
    res.render('index', { name: name,Blog:Blog});
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})