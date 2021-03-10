function arrayDiff(a, b) {
  b.forEach((value) => {
    while (a.includes(value)) {
      a.splice(a.indexOf(value), 1);
    }
  });
  return a;
}

function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}

export { array_diff as arrayDiff };
