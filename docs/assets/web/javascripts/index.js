import "../styles/index.scss";
import $ from "jquery";
// import "./components/FileList.jsx";

console.log("Initialized javascript");

/**
 *
 * @param {string} data
 */
function dataStuff(data) {
  console.log("List of files:\n" + data);
  data.split(" | ").forEach((fileName) => {
    let color = "#4e5d94";
    if (fileName.includes("broken")) {
      color = "#FF0000";
    }
    $(".hide-on-load").hide();
    $(".file-nav").append(
      `<a href="https://github.com/jamesinaxx/jamesinaxx/blob/public/code/javascripts/codewars/${fileName}" target="_blank" style="color: ${color}">` +
        fileName.replace(".js", "") +
        "</a>" +
        "<br>"
    );
  });
}

$.ajax("files.txt").then(dataStuff);
