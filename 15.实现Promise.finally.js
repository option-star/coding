Promise.prototype.finally = (cb) => {
  return this.then(
    (value) => {
      Promise.resolve(cb()).then(() => {
        return value;
      });
    },
    (error) =>
      Promise.resolve(cb()).then(() => {
        throw err;
      })
  );
};
