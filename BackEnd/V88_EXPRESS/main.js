const express = require("express");
const app = express();
const port = 3000;
// app.get app.put  app.post  app.delete(path,handler)

app.get("/", (req, res) => {
  res.send("hello");
});


// app.get("/about", (req, res) => {
//   res.send("Dharmesh Raikwar Server");
// });

// app.get("/contact", (req, res) => {
//   res.send("hello contact me");
// });

app.use(express.static('public'))

app.get('/blog/:slug', (req, res) => {
  // console.log(req);
  //http://localhost:3000/blog/hello
  console.log(req.params);
  console.log(req.query);
  res.send(`hello ${req.params.slug}`);
});
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});