function getSum(a, b) {
  if (a == b) {
    return a;
  } else {
    let large = a;
    let small = b;
    if (a < b) {
      large = b;
      small = a;
    }
    let finalSum = small;
    for (let i = small + 1; i <= large; i++) {
      finalSum += i;
    }
    return finalSum;
  }
}

console.log(getSum(-1, 2));
