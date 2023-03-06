const clone = (target, map = new Map()) => {
  if (typeof target === 'object') {
    // 处理对象类型与数组类型
    const cloneTarget = Array.isArray(target) ? [] : {};

    // 处理循环引用
    if (map.has(target)) return map.get(target);
    map.set(target, cloneTarget);

    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
};

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
  },
  field4: [2, 4, 8],
};
target.target = target;

const result = clone(target);
console.log(result);
console.log(result === target);
