// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

export function twoSu2(nums: number[], target: number): number[] {
  // loop
  for (let i = 0; i < nums.length; i++) {
    // check, is "i" true?
    for (let j = i + 1; j < nums.length; j++) {
      // check, i s "j" true?
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
    // if there is no answer
  }
  return [];
}

// double for loop is problematic for performance
// time complexity O(n^2)
// space complexity O(1)

// Optimal solution

export function twoSum(nums: number[], target: number): number[] {
  const dic: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const total = target - num;

    // check if total exists in dic
    if (total in dic) {
      return [dic[total], i];

    // add num to dic
    } else {
      dic[num] = i;
    }
  }
  return [];
}
