/**
 * Promise.all
 * @param {*} promises 任务列表
 */
Promise.all = (promises) => {
  const arr = [];
  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      Promise.resolve(item).then((value) => {
        arr.push(value);
        if (arr.length === promises.length) resolve(arr);
      }, reject);
    });
  });
};
