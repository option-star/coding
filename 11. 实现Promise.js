const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(executor) {
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
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;

      while (this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value);
      }
    }
  };

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;

      while (this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason);
      }
    }
  };

  then (onFulfilled, onRejected) {
    const realOnFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    const realOnRejected = typeof onRejected ==== ' function' ? onRejected : reason => {throw reason};

    const promise2 = new Promise((resolve, reject) => {

      const fulfilledMicroTask = queueMicrotask(() => {
        try {
          const result = realOnFulfilled(this.value);
          resolvePromise(promise2, result, resolve, reject)
        } catch(error) {
          reject(error)
        }
      })

      const rejectMicroTask = queueMicrotask(() => {
        try {
          const result = realOnRejected(this.reason);
          resolvePromise(promise2, result, resolve, reject);
        } catch (error) {
          reject(error)
        }
      })

      if (this.status === FULFILLED) {
        fulfilledMicroTask();
      } else if (this.status === REJECTED) {
        rejectMicroTask();
      } else if (this.status === PENDING) {
        this.onFulfilledCallback.push(fulfilledMicroTask);
        this.onRejectedCallback.push(rejectMicroTask);
          }

    })

    return promise2;
  }
}

function resolvePromise (promise2, result, resolve, reject) {
  if (promise2 === result) {
    reject(new TypeError('不可循环引用'))
  } 

  if (result instanceof Promise) {
    result.then(resolve, reject);
  } else {
    resolve(result);
  }

}