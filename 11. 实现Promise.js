class Promise {
  constructor(executor) {
    // executor执行器，进入会立即执行
    executor();
  }
}
