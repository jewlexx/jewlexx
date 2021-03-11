import $ from "jquery";

var myloc = window.location.href;
var locarray = myloc.split("/");
delete locarray[locarray.length - 1];
var arraytext = locarray.join("/");

console.log(arraytext);
/*
console.log(fileList);
fileList.forEach((fileName) => {
  $(".file-nav").append("<li>" + fileName + "</li>");
});
console.log("Appended with file names");
*/
