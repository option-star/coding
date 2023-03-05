const PENDING = 'pending';
const REJECTED = 'rejected';
const FULFILLED = 'fulfilled';

class MyPromise {
  constructor(executor) {
    // executor执行器，进入会立即执行
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  status = PENDING;

  value = null;
  reason = null;

  onFulfilledCallback = [];
  onRejectedCallback = [];

  resolve = (value) => {
    // 只有PENDING状态才会进行状态修改
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;

      while (this.onFulfilledCallback.length) {
        this.onFulfilledCallback?.shift()(value);
      }
    }
  };

  reject = (reason) => {
    // 只有PENDING才会执行状态修改
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      this.onRejectedCallback?.(reason);
      while (this.onRejectedCallback.length) {
        this.onRejectedCallback?.shift()(reason);
      }
    }
  };

  then(onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        const result = onFulfilled(this.value);
        resolvePromise(promise2, result, resolve, reject);
      } else if (this.status === REJECTED) {
        onRejected(this.reason);
      } else if (this.status === PENDING) {
        this.onFulfilledCallback.push(onFulfilled);
        this.onRejectedCallback.push(onRejected);
      }
    });

    return promise2;
  }
}

function resolvePromise(promise, result, resolve, reject) {
  if (promise === result) {
    return reject(new TypeError('循环引用自身'));
  }
  if (result instanceof MyPromise) {
    result.then(resolve, reject);
  } else {
    resolve(result);
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve('success');
});

const p1 = promise.then((value) => {
  console.log('resolve', value);
  return p1;
});
