/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Index = m - 1,
    nums2Index = n - 1,
    lastIndex = nums1.length - 1;

  while (nums1Index >= 0 && nums2Index >= 0) {
    nums1[lastIndex--] =
      nums1[nums1Index] > nums2[nums2Index]
        ? nums1[nums1Index--]
        : nums2[nums2Index--];
  }

  while (nums2Index >= 0) {
    nums1[lastIndex--] = nums2[nums2Index--];
  }
};
