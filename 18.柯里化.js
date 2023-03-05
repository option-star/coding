/**
 * 函数柯里化
 * @param {*} fn 
 * @param  {...any} outerArgs 
 * @returns 
 */
const curry = (fn, ...outerArgs) => {
  return outerArgs.length > fn.length
    ? fn(...outerArgs)
    : (...innerArgs) => fn(fn, ...outerArgs, ...innerArgs);
};
