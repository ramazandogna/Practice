"use client";
import { useState } from "react";
import { argumentsLength } from "./index";

// Example usage 1:
const result1 = argumentsLength(5);
console.log(result1); // Output: 1

// Example usage 2
const result2 = argumentsLength({}, null, "3");
console.log(result2); // Output: 3

// Example usage 3
const result3 = argumentsLength();
console.log(result3); // Output: 0

export default function ReturnLengthOfArgumentsPassed() {
  const [example1] = useState(result1);
  const [example2] = useState(result2);
  const [example3] = useState(result3);

  return (
    <div>
      <p className="max-w-[450px]">
        <strong>Question:</strong> Write a function argumentsLength that returns
        the count of arguments passed to it. The function should accept any
        number of arguments of any type and return the total count of arguments
        passed.
      </p>
      <br />
      <br />
      <h2 className="font-bold text-[16px]">Solution:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded overflow-auto">
        {`function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}`}
      </pre>
      <br />
      <br />
      <h2 className="font-bold text-[16px]">Example 1:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: argumentsLength(5)
        <br />
        Output: {example1}
        <br />
        Explanation: One value was passed to the function
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 2:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: argumentsLength({`{}`}, null, &apos;3&apos;)
        <br />
        Output: {example2}
        <br />
        Explanation: Three values were passed to the function
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 3:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: argumentsLength()
        <br />
        Output: {example3}
        <br />
        Explanation: No arguments were passed to the function
      </pre>
    </div>
  );
}
