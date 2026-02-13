"use client";
import { useState } from "react";
import { reduce } from "./index";

// Example usage 1:
const nums1 = [1, 2, 3, 4];
const fn1 = (accum: number, curr: number) => accum + curr;
const init1 = 0;
console.log(reduce(nums1, fn1, init1)); // Output: 10

// Example usage 2
const nums2 = [1, 2, 3, 4];
const fn2 = (accum: number, curr: number) => accum + curr * curr;
const init2 = 100;
console.log(reduce(nums2, fn2, init2)); // Output: 130

// Example usage 3
const nums3: number[] = [];
const fn3 = (accum: number, curr: number) => 0;
const init3 = 25;
console.log(reduce(nums3, fn3, init3)); // Output: 25

export default function ArrayReduceTransformation() {
  const [example1] = useState(nums1);
  const [example2] = useState(nums2);
  const [example3] = useState(nums3);

  reduce(example1, fn1, init1);
  reduce(example2, fn2, init2);
  reduce(example3, fn3, init3);

  return (
    <div>
      <p className="max-w-[450px]">
        <strong>Question:</strong> Given an integer array nums, a reducer
        function fn, and an initial value init, return the final result obtained
        by executing the fn function on each element of the array, sequentially,
        passing in the return value from the calculation on the preceding element.
        If the length of the array is 0, the function should return init. Please
        solve it without using the built-in Array.reduce method.
      </p>
      <br />
      <br />
      <h2 className="font-bold text-[16px]">Solution:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded overflow-auto">
        {`function reduce(nums: number[], fn: Fn, init: number): number {
    let val: number = 0;
    if (nums.length === 0) {
        return val = init
    } else {
        val = fn(init, nums[0])
        for (let i = 1; i < nums.length; i++) {
            val = fn(val, nums[i])
        }
        return val;
    }
}`}
      </pre>
      <br />
      <br />
      <h2 className="font-bold text-[16px]">Example 1:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: nums = {JSON.stringify(example1)}, fn = sum, init = {init1}
        <br />
        Output: {JSON.stringify(reduce(example1, fn1, init1))}
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 2:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: nums = {JSON.stringify(example2)}, fn = sum(curr*curr), init =
        {init2}
        <br />
        Output: {JSON.stringify(reduce(example2, fn2, init2))}
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 3:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: nums = {JSON.stringify(example3)}, fn = sum, init = {init3}
        <br />
        Output: {JSON.stringify(reduce(example3, fn3, init3))}
      </pre>
    </div>
  );
}
