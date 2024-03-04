import fs from "fs/promises";
import path from "path";

async function organizeFiles() {
  let files = await fs.readdir("./");
  for (let file of files) {
    let extension = path.extname(file).slice(1); // get file extension
    if (!extension || extension=="js"||extension=="json") continue; // skip if file has no extension
    let newDir = path.join("./", extension);
    try {
      await fs.access(newDir);
    } catch {
      await fs.mkdir(newDir);
    }
    await fs.rename(path.join("./", file), path.join(newDir, file));
  }
}

organizeFiles().catch(console.error);