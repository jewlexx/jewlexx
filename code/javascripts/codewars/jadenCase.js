String.prototype.toJadenCase = function () {
  let mainArray = [];
  this.split(" ").forEach((string) => {
    mainArray.push(string.charAt(0).toUpperCase() + string.slice(1));
  });
  return mainArray.join(" ");
};
