const PENDING = 'pending';
const REJECTED = 'rejected';
const FULFILLED = 'fulfilled';

class MyPromise {
  constructor(executor) {
    // executor执行器，进入会立即执行
    executor(this.resolve, this.reject);
  }

  status = PENDING;

  value = null;
  reason = null;

  onFulfilledCallback = null;
  onRejectedCallback = null;

  resolve = (value) => {
    // 只有PENDING状态才会进行状态修改
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
    }
  };

  reject = (reason) => {
    // 只有PENDING才会执行状态修改
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
    }
  };

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    } else if (this.status === REJECTED) {
      onRejected(this.reason);
    } else if (this.status === PENDING) {
      this.onFulfilledCallback = onFulfilled;
      this.onRejectedCallback = onRejected;
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve('success');
  reject('error');
});

promise.then(
  (value) => {
    console.log('resolve', value);
  },
  (reason) => {
    console.log('reject', reason);
  }
);
