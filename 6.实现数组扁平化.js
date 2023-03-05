/**
 * 实现数组扁平化
 * @param {*} arr
 * @param {*} num
 */
const flat = (arr, num = 1) => {
  return num > 0
    ? arr.reduce(
        (pre, cur) => pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur),
        []
      )
    : arr.slice();
};

const arr = [
  1,
  2,
  3,
  4,
  [1, 2, 3, [1, 2, 3, [1, 2, 3]]],
  5,
  'string',
  { name: '弹铁蛋同学' },
];
console.log(flat(arr, Infinity));
