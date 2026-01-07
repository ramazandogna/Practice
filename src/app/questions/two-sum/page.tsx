"use client";
import { useState } from "react";
import { twoSum } from "./index";

// Example usage 1:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

// Example usage 2
const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

// Example usage 3
const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Output: [0, 1]

export default function TwoSum() {
  const [example1] = useState(nums1);
  const [example2] = useState(nums2);
  const [example3] = useState(nums3);

  twoSum(example1, target1);
  twoSum(example2, target2);
  twoSum(example3, target3);
  return (
    <div>
      <p className="max-w-[450px]">
        Question: Given an array of integers nums and an integer target, return
        indices of the two numbers such that they add up to target. You may
        assume that each input would have exactly one solution, and you may not
        use the same element twice. You can return the answer in any order.
      </p>
      <br />
      <br />
      <h2 className="font-bold text-[16px]">Example 1:</h2>
      <pre className="text-[12px]">
        Input: nums = {JSON.stringify(example1)}, target = {target1} <br />
        Output: {JSON.stringify(twoSum(example1, target1))}{" "}
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 2:</h2>
      <pre className="text-[12px]">
        Input: nums = {JSON.stringify(example2)}, target = {target2} <br />
        Output: {JSON.stringify(twoSum(example2, target2))}{" "}
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 3:</h2>
      <pre className="text-[12px]">
        Input: nums = {JSON.stringify(example3)}, target = {target3} <br />
        Output: {JSON.stringify(twoSum(example3, target3))}{" "}
      </pre>
    </div>
  );
}
