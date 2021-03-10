/**
 *
 * @param {string} str
 * @returns
 */
const disemvowel = (str) =>
  str
    .split("")
    .filter((value) => !["a", "e", "i", "o", "u"].includes(value.toLowerCase()))
    .join("");

console.log(disemvowel("This website is for losers LOL!"));
