const isObject = (target) =>
  (typeof target === 'object' || typeof target === 'function') &&
  target !== null;

const Clone = (target, map = new WeakMap()) => {
  // 处理Map
  if (target instanceof Map) return new Map([...target]);

  // 处理Set
  if (target instanceof Set) return new Set([...target]);

  // 处理symbol(值)
  if (typeof target === 'symbol') return Symbol(target.description);

  // 处理函数
  if (typeof target === 'function') return target;

  // 处理普通类型
  if (!isObject(target)) return target;

  // 处理数组
  const _target = Array.isArray(target) ? [] : {};

  // 处理循环引用
  if (map.has(target)) return map.get(target);
  map.set(target, _target);

  Object.keys(target).reduce((pre, cur) => {
    pre[cur] = Clone(target[cur]);
    return pre;
  }, _target);

  return _target;
};

const map = new Map();
map.set('key', 'value');
map.set('Li', 'code秘密花园');

const set = new Set();
set.add('Li');
set.add('code秘密花园');
const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
  },
  field4: [2, 4, 8],
  empty: null,
  map,
  set,
  bool: new Boolean(true),
  num: new Number(2),
  str: new String(2),
  symbol: Symbol(1),
  date: new Date(),
  reg: /\d+/,
  error: new Error(),
  func1: () => {
    console.log('code秘密花园');
  },
  func2: function (a, b) {
    return a + b;
  },
};

const result = Clone(target);
console.log(result);
console.log(target);
console.log(target === result);
