import $ from "jquery";

console.log(fileList);
fileList.forEach((fileName) => {
  $(".file-nav").append("<li>" + fileName + "</li>");
});
console.log("Appended with file names");
