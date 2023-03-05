class EventBus {
  constructor() {
    this.eventBus = {};
  }

  /**
   * 事件注册
   * @param {*} name 名称
   * @param {*} callback 回调
   * @param {*} _this this指向
   */
  on(name, callback, _this) {
    if (!this?.eventBus?.[name]) {
      this.eventBus[name] = { callback, _this };
    } else {
      this.eventBus[name].push({ callback, _this });
    }
  }

  /**
   * 取消监听
   * @param {*} name
   * @param {*} callback
   */
  off(name, callback) {
    if (this?.eventBus?.[name]) {
      this.eventBus[name].forEach((item, index) => {
        if (item.callback === callback) {
          this.eventBus[name].splice(index, 1);
        }
      });
    }
  }

  /**
   * 事件调用
   * @param {*} name
   * @param  {...any} args
   */
  emit(name, ...args) {
    if (this?.eventBus?.[name]) {
      for (const item of this.eventBus[name]) {
        const { _this, callback } = item;
        callback.apply(_this, args);
      }
    }
  }
}
