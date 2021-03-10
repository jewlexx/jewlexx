const path = require("path");
const fs = require("fs");
const ncc = require("@vercel/ncc");
ncc(path.join(__dirname, "../../index"), {
  cache: path.join(__dirname, ".cache"),
  minify: true,
  watch: false,
}).then(({ code, map, assets }) => {
  if (!fs.existsSync(path.join(__dirname, "dist/index.js"))) {
    fs.mkdirSync(path.join(__dirname, "dist"));
  }
  fs.writeFileSync(path.join(__dirname, "dist/index.js"), code);
  // console.log(code);
  // Assets is an object of asset file names to { source, permissions, symlinks }
  // expected relative to the output code (if any)
});
