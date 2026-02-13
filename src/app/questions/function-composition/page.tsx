"use client";
//react
import { useState } from "react";
//question function
import { compose } from "./index";

// Example usage 1:
const functions1 = [
  (x: number) => x + 1,
  (x: number) => x * x,
  (x: number) => 2 * x,
];
const x1 = 4;

// Example usage 2
const functions2 = [
  (x: number) => 10 * x,
  (x: number) => 10 * x,
  (x: number) => 10 * x,
];
const x2 = 1;

// Example usage 3
const x3 = 42;
const functions3: Array<(x: number) => number> = [];

export default function FunctionComposition() {
  const [example1] = useState(x1);
  const [example2] = useState(x2);
  const [example3] = useState(x3);

  compose(functions1)(example1);
  compose(functions2)(example2);
  compose(functions3)(example3);

  return (
    <div>
      <p className="max-w-[450px]">
        <strong>Question:</strong> Given an array of functions [f1, f2, f3, ...,
        fn], return a new function fn that is the function composition of the
        array of functions. The function composition of [f(x), g(x), h(x)] is
        fn(x) = f(g(h(x))). The function composition of an empty list of
        functions is the identity function f(x) = x.
      </p>
      <br />
      <br />
      <h2 className="font-bold text-[16px]">Solution:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded overflow-auto">
        {`function compose(functions: F[]): F {
  return function (x) {
    let result: number = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}`}
      </pre>
      <br />
      <br />
      <h2 className="font-bold text-[16px]">Example 1:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: functions = [x =&gt; x + 1, x =&gt; x * x, x =&gt; 2 * x], x ={" "}
        {example1}
        <br />
        Output: {compose(functions1)(example1)}
        <br />
        Explanation: 2 * 4 = 8 → 8 * 8 = 64 → 64 + 1 = 65
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 2:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: functions = [x =&gt; 10 * x, x =&gt; 10 * x, x =&gt; 10 * x], x ={" "}
        {example2}
        <br />
        Output: {compose(functions2)(example2)}
        <br />
        Explanation: 10 * 1 = 10 → 10 * 10 = 100 → 10 * 100 = 1000
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 3:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: functions = [], x = {example3}
        <br />
        Output: {compose(functions3)(example3)}
        <br />
        Explanation: Empty array returns identity function
      </pre>
    </div>
  );
}
