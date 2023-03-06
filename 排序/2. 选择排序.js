/* 
排序思路：选择排序关键字是"最小值"，循环遍历数组，每次寻找范围的最小值，把它放在范围的头部；
然后缩小排序范围，继续重复以上操作，知道数组完全有序为止
*/

const selectSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
};

// 测试数据
const test = [3, 2, 4, 1, 6, 5];
console.log(selectSort(test));
