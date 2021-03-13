import "../styles/index.scss";
import $ from "jquery";

console.log("Initialized javascript");

/**
 *
 * @param {string} data
 */
function dataStuff(data) {
  console.log("List of files:\n" + data);
  data.split(" | ").forEach((fileName) => {
    let classList = "js-codewars-file";
    if (fileName.includes("broken")) classList = "js-codewars-broken";
    $(".hide-on-load").hide();
    $(".file-nav").append(
      `<a href="https://raw.githubusercontent.com/jamesinaxx/jamesinaxx/public/code/javascripts/codewars/${fileName}" target="_blank" class="${classList}">` +
        fileName.replace(".js", "") +
        "</a>" +
        "<br>"
    );
  });
}

$.ajax("files.txt").then(dataStuff);
