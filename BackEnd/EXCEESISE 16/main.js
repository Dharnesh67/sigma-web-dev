const express = require("express");
const mongoose = require("mongoose");
const kitten = require("./models/EMPLOYEe");
mongoose.connect("mongodb://localhost:27017/API");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  let html = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, libero cupiditate voluptates cum ab eaque aspernatur esse vel. Earum ducimus nesciunt optio fuga quidem fugiat consequuntur blanditiis magni aut. Fugit?`;
  res.render("index", { foo: "World", html: html });
});
app.get("/generate", async (req, res) => {
  //generate random data
  let randomnames = [
    "dharmesh",
    "rajesh",
    "suresh",
    "ganesh",
    "manesh",
    "tanesh",
    "janesh",
    "kanesh",
    "vanesh",
    "lanesh",
  ];
  let randomcity = [
    "jhansi",
    "kanpur",
    "delhi",
    "mumbai",
    "pune",
    "bangalore",
    "hyderabad",
    "chennai",
    "kolkata",
    "lucknow",
  ];
  let randomsalary = [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000];
  let randomlanguage = [
    "hindi",
    "english",
    "french",
    "spanish",
    "german",
    "italian",
    "japanese",
    "chinese",
    "russian",
    "arabic",
  ];

  for (let i = 0; i < 10; i++) {
    let randommanager = [true, false];
    let randomnameindex = Math.floor(Math.random() * 10);
    let randomcityindex = Math.floor(Math.random() * 10);
    let randomsalaryindex = Math.floor(Math.random() * 10);
    let e = await kitten.create({
      name: randomnames[randomnameindex],
      salary: randomsalary[randomsalaryindex],
      language: randomlanguage[randomnameindex],
      city: randomcity[randomcityindex],
      ismanager: randommanager[Math.floor(Math.random() * 2)],
    });
    e.save();
    // res.send("Data generated");
    // e.save();
  }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//github.com/mde/ejs/wiki/Using-EJS-with-Express
