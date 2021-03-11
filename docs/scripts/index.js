const $ = require("jquery");
const fs = require("fs");
const root = require("app-root-path");

fs.readdirSync(root.resolve("./code/javascripts/codewars")).forEach(
  (fileName) => {
    $(".file-nav").append("<li>" + fileName + "</li>");
  }
);
console.log("Appended with file names");
