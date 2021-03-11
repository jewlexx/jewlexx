import $ from "jquery";
const path = process.env.BASEDIR;
require("fs-web")
  .readdir(path + "/code/javascripts/codewars")
  .then((fileList) => {
    console.log(fileList);
    fileList.forEach((fileName) => {
      $(".file-nav").append("<li>" + fileName + "</li>");
    });
    console.log("Appended with file names");
  });
