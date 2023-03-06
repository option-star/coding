const clone = (target) => {
  if (typeof target === 'object') {
    const cloneTarget = {};
    for (const key in target) {
      cloneTarget[key] = clone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
};

const target = {
  field1: 1,
  field2: undefined,
  field3: 'Con',
  field4: {
    child: 'child',
    child2: {
      child2: 'child2',
    },
  },
};

const result = clone(target);
console.log(result);
console.log(result === target);
