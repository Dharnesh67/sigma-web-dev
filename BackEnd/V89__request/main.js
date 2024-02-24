const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
    console.log("its a get request");
  res.send("Hello World22");
});

app.post("/", (req, res) => {
  console.log("its a post request");
  res.send("hello from post");
});

app.put("/", (req, res) => {
  console.log("its a put request");
  res.send("hello from put");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
