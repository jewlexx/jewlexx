/**
 *
 * @param {string[]} names
 * @returns
 */
function likes(names) {
  if (!names.length) return "no one likes this";
  if (names.length === 1) return names[0] + " likes this";
  if (names.length === 2) return names.join(" and ") + " like this";
  if (names.length === 3)
    return names.slice(0, 2).join(", ") + " and " + names[2] + " like this";
  return (
    names.slice(0, 2).join(", ") +
    " and " +
    (names.length - 2) +
    " others like this"
  );
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Peter", "Jacob"]));
console.log(likes(["Peter", "Jacob", "Phillip"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
