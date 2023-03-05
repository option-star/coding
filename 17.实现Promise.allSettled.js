Promise.allSettled = (promises) => {
  const arr = [];
  return new Promise((resolve, reject) => {
    const resolvePromise = (status, value) => {
      arr.push({ status, value });
      if (arr.length === promises.length) resolve(arr);
    };

    promises.forEach((item) => {
      Promise.resolve(item).then(
        (value) => resolvePromise('fulfilled', value),
        (error) => resolvePromise('rejected', error)
      );
    });
  });
};

