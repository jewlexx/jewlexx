/**
 *
 * @param {number} nFloors
 */
function towerBuilder(nFloors) {
  const baseLen = 1 + (nFloors - 1) * 2;
  //   return baseLen;
  const tower = [];
  const mid = (baseLen - 1) / 2 + 1;
  for (let i = 1; i < nFloors + 1; i++) {
    tower.push(
      " ".repeat(mid - (1 + (i - 1) * 2 - 1 / 2) + 1) +
        "*".repeat(1 + (i - 1) * 2) +
        " ".repeat(mid - (1 + (i - 1) * 2 - 1 / 2) + 1)
    );
  }
  return tower;
}

console.log(towerBuilder(3));
