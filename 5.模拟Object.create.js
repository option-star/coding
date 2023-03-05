/**
 * Object.create()方法创建一个新对象，适用现有的对象来提供新创建的对象的__proto__
 * @param {*} proto
 * @returns
 */
const create = (proto) => {
  // 创建构造函数
  function Func() {}

  // 赋值原型
  Func.prototype = proto;

  // 返回实例
  return new Func();
};
