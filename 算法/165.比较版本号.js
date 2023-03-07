/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  let index = 0;

  while (arr1[index] || arr2[index]) {
    const val1 = +arr1?.[index] || 0;
    const val2 = +arr2?.[index] || 0;
    if (val1 > val2) {
      return 1;
    }

    if (val1 < val2) {
      return -1;
    }
    index++;
  }

  return 0;
};
