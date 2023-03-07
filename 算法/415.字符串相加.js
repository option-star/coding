/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const result = [];
  const nums1 = num1.split('');
  const nums2 = num2.split('');
  let flag = 0;

  while (nums1.length || nums2.length || flag) {
    const item1 = nums1.length > 0 ? +nums1.pop() : 0;
    const item2 = nums2.length > 0 ? +nums2.pop() : 0;
    const sum = item1 + item2 + flag;
    flag = (sum / 10) | 0;
    result.unshift(sum % 10);
  }

  return result.join('');
};
