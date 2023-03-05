/**
 * new操作符
 * 1. 创建一个全新的对象
 * 2. 这个对象的__proto__要指向构造函数的原型prototype
 * 3. 执行构造函数，适用call/apply 改变this的指向
 * 4. 返回值为Object类型泽作为new方法的返回值返回，否则返回上述全新对象
 * @param {*} fn 
 * @param  {...any} args 
 * @returns 
 */
const myNew = (fn, ...args) => {
  const instance = Object.create(fn.prototype);
  const result = fn.apply(instance, args);
  return typeof result === 'object' ? result : instance;
};
