import fs from "fs/promises";
console.log("start");
// console.log(fs);
let a = await fs.readFile("file.txt");

let b = fs.appendFile("file.txt", "\nHairy Puttar");
console.log(a.toString());
