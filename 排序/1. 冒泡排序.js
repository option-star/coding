/* 
思路：从第一项开始，反复比较相邻两项，如果第一项比第二项大，则交换位置，反之不动。
 */

const bubbleSort1 = (arr) => {
  // 缓存数组长度
  const len = arr.length;

  // 外层循环用于控制从头到尾的比较+交换有多少轮
  for (let i = 0; i < len; i++) {
    // 内层循环用于完成每一轮遍历过程中的重复比较+交换
    for (let j = 0; j < len - 1; j++) {
      // 若相邻元素前面的数大于后面的数
      if (arr[j] > arr[j + 1]) {
        // 则交换两者
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

/* 改进一：最后面元素已排序 */
const bubbleSort2 = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

/* 改进二： 数组在循环中没发生过变化就已经有序，不需要继续比较 */
const bubbleSort3 = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let flag = false;

    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // 只要发生一次交换，就改变标志位
        flag = true;
      }
    }

    // 如果标志位在一次交换中没发生过变化，则直接退出
    if (!flag) return arr;
  }

  return arr;
};

// 测试数据
const test = [3, 2, 4, 1, 6, 5];
console.log(bubbleSort3(test));
