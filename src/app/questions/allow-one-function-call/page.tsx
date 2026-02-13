"use client";
import { once } from "./index";

// Example usage 1:
const fn1 = (a: number, b: number, c: number) => a + b + c;
const onceFn1 = once(fn1);
const result1_1 = onceFn1(1, 2, 3);
const result1_2 = onceFn1(2, 3, 6);

// Example usage 2
const fn2 = (a: number, b: number, c: number) => a * b * c;
const onceFn2 = once(fn2);
const result2_1 = onceFn2(5, 7, 4);
const result2_2 = onceFn2(2, 3, 6);
const result2_3 = onceFn2(4, 6, 8);

// Example usage 3
const fn3 = (x: number) => x * 2;
const onceFn3 = once(fn3);
const result3_1 = onceFn3(5);
const result3_2 = onceFn3(10);

export default function AllowOneFunctionCall() {
  return (
    <div>
      <p className="max-w-[450px]">
        <strong>Question:</strong> Given a function fn, return a new function
        that is identical to the original function except that it ensures fn is
        called at most once. The first time the returned function is called, it
        should return the same result as fn. Every subsequent time it is called,
        it should return undefined.
      </p>
      <br />
      <br />
      <h2 className="font-bold text-[16px]">Solution:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded overflow-auto">
        {`function once(fn: Function): OnceFn {
    let called = false;
    let result: JSONValue;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        } else {
            return undefined;
        }
    };
}`}
      </pre>
      <br />
      <br />
      <h2 className="font-bold text-[16px]">Example 1:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: fn = (a,b,c) =&gt; (a + b + c), calls = [[1,2,3],[2,3,6]]
        <br />
        First call: onceFn(1, 2, 3) = {String(result1_1)}
        <br />
        Second call: onceFn(2, 3, 6) = {String(result1_2)}
        <br />
        Explanation: fn was called only once, second call returns undefined
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 2:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: fn = (a,b,c) =&gt; (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
        <br />
        First call: onceFn(5, 7, 4) = {String(result2_1)}
        <br />
        Second call: onceFn(2, 3, 6) = {String(result2_2)}
        <br />
        Third call: onceFn(4, 6, 8) = {String(result2_3)}
        <br />
        Explanation: fn was called only once
      </pre>
      <br />
      <h2 className="font-bold text-[16px]">Example 3:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        Input: fn = (x) =&gt; (x * 2), calls = [[5],[10]]
        <br />
        First call: onceFn(5) = {String(result3_1)}
        <br />
        Second call: onceFn(10) = {String(result3_2)}
        <br />
        Explanation: fn executed once, returns undefined on subsequent calls
      </pre>
    </div>
  );
}
