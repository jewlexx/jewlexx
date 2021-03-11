const path = require("path");

const config = {
  entry: path.join(__dirname, "./scripts/index.js"),
  watch: false,
  mode: "development",
  node: {
    global: true,
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./scripts/dist"),
  },
};

if (config.mode === "development") {
  config.watch = true;
}

module.exports = config;
