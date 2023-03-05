/**
 * 实现apply函数
 * @param {*} context 
 * @param {*} args 
 * @returns 
 */
const myApply = function (context = window, args = []) {
  const key = Symbol('key');
  context[key] = this;

  const result = context[key](...args);
  delete context[key];

  return result;
};
