const fs = require("fs");
const path = require("path");

fs.writeFileSync(
  path.join(__dirname, "../docs/assets/dist/files.txt"),
  fs
    .readdirSync(path.join(__dirname, "../code/javascripts/codewars"))
    .join(" | ")
);

console.log("Wrote to " + path.resolve(__dirname, "../docs/files.txt"));
