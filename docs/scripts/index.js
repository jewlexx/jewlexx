const $ = require("jquery");

/**
 *
 * @param {string} data
 */
function dataStuff(data) {
  console.log(data);
  data.split(" | ").forEach((fileName) => {
    $(".file-nav").append("<li>" + fileName.replace(".js", "") + "</li>");
  });
}

$.ajax(
  "https://raw.githubusercontent.com/jamesinaxx/jamesinaxx/public/docs/files.txt"
).then(dataStuff);
