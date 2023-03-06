const clone = (target) => {
  const cloneTarget = {};
  for (const key in target) {
    cloneTarget[key] = target[key];
  }
  return cloneTarget;
};

const test = {
  a: 1,
  b: undefined,
};

const result = clone(test);
console.log(result)
console.log(result === test);
