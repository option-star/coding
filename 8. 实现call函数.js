/**
 * 实现call函数
 * @param {*} context
 * @param  {...any} args
 * @returns
 */
const myCall = function (context = window, ...args) {
  //   将函数作为上下文对象的一个属性
  const key = Symbol();
  context[key] = this;

  //   适用上下文对象调用这个方法，并保存返回结果
  const result = context[key](...args);

  //   删除新增属性
  delete context[key];

  return result;
};