/**
 * 维护数组
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function (s) {
  const arr = [];
  const len = s.length;
  let result = 0;
  for(let i = 0; i< len ; i++) {
      let index = arr.indexOf(s[i]);
      if (index !== -1) {
          arr.splice(0, index + 1);
      }
      arr.push(s[i]);
      result = Math.max(result, arr.length);
  }
  return result;
};

/**
 * 维护下标
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
  const len = s.length;
  let max = 0;
  for (let left = 0, right = 0; right < len; right++) {
      const index = s.substring(left, right).indexOf(s[right]);
      if (index !== -1) {
          left = left + index + 1;
      }

      max = Math.max(max, right - left + 1);
  }

  return max;
};

/**
 * 优化map
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  const map = new Map();
  let max = 0;
  for (let left = 0, right = 0; right < len; right++) {
      if (map.has(s[right])) {
          left = Math.max(map.get(s[right]) + 1, left)
      }

      map.set(s[right], right);
      max = Math.max(max, right - left + 1);
  }

  return max;
};