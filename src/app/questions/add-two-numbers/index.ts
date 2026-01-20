/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  // list node head
  const dummyHead = new ListNode(0);

  // list node vagon
  let current = dummyHead;

  // carry
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    //block the error
    const val1 = l1 !== null ? l1.val : 0;
    const val2 = l2 !== null ? l2.val : 0;

    const total = val1 + val2 + carry;

    //find to carry
    carry = Math.floor(total / 10);

    //find to digit
    const digit = total % 10;

    //new number of listnode
    current.next = new ListNode(digit);

    //new vagon
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummyHead.next;
}
