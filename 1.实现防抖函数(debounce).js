/**
 * 防抖函数原理：在事件多次触发n秒后再执行回调，如果这n秒又被触发，则重新计时。
 * @param {*} fn 用户传入需要防抖的函数
 * @param {*} wait 等待时间
 * @returns
 */
const debounce = (fn, wait) => {
  let timer = 0;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};
