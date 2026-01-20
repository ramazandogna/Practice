"use client";
import { addTwoNumbers, ListNode } from "./index";

export default function AddTwoNumbers() {
  // Example 1: 342 + 465 = 807
  // Represented as: [2,4,3] + [5,6,4] = [7,0,8]
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  let result = addTwoNumbers(l1, l2);

  return (
    <div className="p-4">
      <p className="max-w-[450px] mb-4">
        Question: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
      </p>

      <h2 className="font-bold text-[16px] mb-2">Example:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        {`Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.`}
      </pre>

      <h2 className="font-bold text-[16px] mt-4 mb-2">Solution:</h2>
      <pre className="text-[12px] bg-gray-100 p-2 rounded">
        {result
          ? `Result: [${
              Array.from({ length: 10 }, () => {
                if (!result) return null;
                const val = result.val;
                result = result.next;
                return val;
              })
                .filter((v) => v !== null)
                .join(",")
            }]`
          : "null"}
      </pre>
    </div>
  );
}
