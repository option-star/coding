/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  const len = s.length;
  const arr = [];
  for (let i = 0; i < len; i++) {
    if (Object.keys(map).includes(s[i])) {
      arr.push(s[i]);
    } else if (map[arr.at(-1)] === s[i]) {
      arr.pop();
    } else {
      return false;
    }
  }

  return arr.length === 0;
};
