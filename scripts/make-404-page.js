// make-404-page.js
import fs from "fs";
import path from "path";

const buildDir = "./dist";
const indexPath = path.join(buildDir, "index.html");
const notFoundPath = path.join(buildDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("❌ index.html not found. Did you run `npm run build` first?");
  // Use throw to exit in environments where process is not defined
  throw new Error("index.html not found. Did you run `npm run build` first?");
}

fs.copyFileSync(indexPath, notFoundPath);
console.log("✅ 404.html created from index.html");
