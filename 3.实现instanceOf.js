/**
 * 实现InstanceOf 
 * 1. 先取得当前类的原型，当前实例对象的原型链
 * 2. 一致循环
 * @param {*} example 
 * @param {*} classFunc 
 * @returns 
 */
const myInstanceOf = (example, classFunc) => {
  // 获取实例原型
  const proto = Object.getPrototypeOf(example);

  while (true) {
    if (!proto) return false;

    if (proto === classFunc.prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
};
