/**
 * Given an array of true and false, returns how many trues there are
 * @param {array} pen
 * @returns {Number} The number of full sheep pens
 */
const countSheeps = (pen) => pen.filter(Boolean).length;

export { countSheeps };
