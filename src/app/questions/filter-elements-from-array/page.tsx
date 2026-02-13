"use client";
import { useState } from "react";
import { filter } from "./index";

// Example usage 1:
const arr1 = [0, 10, 20, 30];
const fn1 = (n: number) => n > 10;
console.log(filter(arr1, fn1)); // Output: [20, 30]

// Example usage 2
const arr2 = [1, 2, 3];
const fn2 = (n: number, i: number) => i === 0;
console.log(filter(arr2, fn2)); // Output: [1]

// Example usage 3
const arr3 = [-2, -1, 0, 1, 2];
const fn3 = (n: number) => n + 1;
console.log(filter(arr3, fn3)); // Output: [-2, 1, 2]

export default function FilterElementsFromArray() {
  const [example1] = useState(arr1);
  const [example2] = useState(arr2);
  const [example3] = useState(arr3);

  filter(example1, fn1);
  filter(example2, fn2);
  filter(example3, fn3);

  return (
    <div>
      <p className="max-w-[450px]">
        <strong>Question:</strong> Given an integer array arr and a filtering
        function fn, return a filtered array filteredArr. The fn function takes
        one or two arguments: arr[i] - number from the arr, and i - index of
        arr[i]. filteredArr should only contain the elements from the arr for
        which the expression fn(arr[i], i) evaluates to a truthy value. Please
        solve it without using the built-in Array.filter method.
      </p>
      <br />
      <br />
      <h2 className="font-bold text-[16px]">Solution:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded overflow-auto">
        {`function filter(arr: number[], fn: Fn): number[] {
    const returnedArr: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        fn(arr[i], i) ? returnedArr.push(arr[i]) : null;
    }
    return returnedArr;
}`}
      </pre>
      <br />
      <br />
      <h2 className="font-bold text-[16px]">Example 1:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: arr = {JSON.stringify(example1)}, fn = greaterThan10
        <br />
        Output: {JSON.stringify(filter(example1, fn1))}
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 2:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: arr = {JSON.stringify(example2)}, fn = firstIndex
        <br />
        Output: {JSON.stringify(filter(example2, fn2))}
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 3:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: arr = {JSON.stringify(example3)}, fn = plusOne
        <br />
        Output: {JSON.stringify(filter(example3, fn3))}
      </pre>
    </div>
  );
}
