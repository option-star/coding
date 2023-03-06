/* 
思路：当前元素前面的序列是有序的，从后往前去寻找当前元素在前面序列的位置
*/

const insertSort = (arr) => {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    const temp = arr[i];

    let j;
    for (j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = temp;
  }

  return arr;
};

// 测试数据
const test = [3, 2, 4, 1, 6, 5];
console.log(insertSort(test));
