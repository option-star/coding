/**
 * 实现bind函数
 * @param {*} context 
 * @param  {...any} outerArgs 
 * @returns 
 */
const bind = function (context = window, ...outerArgs) {
  const self = this;

  return function newFn(...innerArgs) {
    if (this instanceof newFn) {
      return new self(...outerArgs, ...innerArgs);
    }

    return self.apply(context, [...outerArgs, ...innerArgs]);
  };
};
