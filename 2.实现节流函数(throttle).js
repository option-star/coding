/**
 * 节流函数原理：规定一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次，只有一次生效。
 * @param {*} fn 用户传入需要防抖的函数
 * @param {*} wait 等待时间
 * @returns
 */
const throttle = (fn, wait) => {
  let lastTime = 0;
  return function (...args) {
    let now = +new Date();
    if (now - lastTime >= 0) {
      lastTime = now;
      fn.apply(fn, args);
    }
  };
};