const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
// app.get("/", (req, res) => {
//     console.log("its a get request");
//   res.send("Hello World22");
// });

// app.post("/", (req, res) => {
//   console.log("its a post request");
//   res.send("hello from post");
// });

// app.put("/", (req, res) => {
//   console.log("its a put request");
//   res.send("hello from put");
// });

// app.delete("/", (req, res) => {
//   console.log("its a delete request");
//   res.send("hello from delete");
// });

// app.all("/", (req, res) => {
//   console.log("its a all request");
//   res.send("hello from all");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello from about");
// });

app // chaining of routes
  .get("/", (req, res) => {
    console.log("its a get request");
    res.send("Hello World22");
  })
  .post("/", (req, res) => {
    console.log("its a post request");
    res.send("hello from post");
  })
  .put("/", (req, res) => {
    console.log("its a put request");
    res.send("hello from put");
  });
  
app.get("/index", (req, res) => {
  console.log("its a index page ");
  res.sendFile("template/index.html", { root: __dirname });
   // folder se file ko send karna hai
});
app.get("/api", (req, res) => {
  res.json({ name: "sachin", age: 23 });
   // folder se file ko send karna hai
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
