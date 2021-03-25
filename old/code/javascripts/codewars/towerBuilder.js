/** Could be improved but yano
 *
 * @param {number} nFloors
 */
function towerBuilder(nFloors) {
  const baseLen = 1 + (nFloors - 1) * 2;
  const tower = [];
  const mid = (baseLen - 1) / 2 + 1;
  for (let i = 1; i < nFloors + 1; i++) {
    const spaceCount = mid - 1;
    const spaces = spaceCount !== 0 ? " ".repeat(spaceCount) : "";
    const str = spaces + "*".repeat(1 + (i - 1) * 2) + spaces;
    tower.push(
      str.substring(
        (str.length - baseLen) / 2,
        str.length - (str.length - baseLen) / 2
      )
    );
  }
  return tower;
}

console.log(towerBuilder(3));
