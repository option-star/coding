Promise.prototype.catch = (cb) => {
  return this.then(null, cb);
};
