const $ = require("jquery");
import "../styles/index.scss";

console.log("Initialized javascript");

/**
 *
 * @param {string} data
 */
function dataStuff(data) {
  console.log(data);
  data.split(" | ").forEach((fileName) => {
    $(".hide-on-load").hide();
    $(".file-nav").append(
      `<a href="https://github.com/jamesinaxx/jamesinaxx/blob/public/code/javascripts/codewars/${fileName}" target="_blank">` +
        fileName.replace(".js", "") +
        "</a>" +
        "<br>"
    );
  });
}

$.ajax("https://jamesinaxx.github.io/jamesinaxx/files.txt").then(dataStuff);
