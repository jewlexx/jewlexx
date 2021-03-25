/**
 * Turns the given string into Jaden Case
 * @returns {string} The given string in Jaden Case
 */
String.toJadenCase = function () {
  let mainArray = [];
  this.split(' ').forEach((string) => {
    mainArray.push(string.charAt(0).toUpperCase() + string.slice(1));
  });
  return mainArray.join(' ');
};
