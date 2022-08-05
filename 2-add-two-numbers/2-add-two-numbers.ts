/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function listNodeToArray(l: ListNode, a: number[] = []): number[] {
  if (l.next) {
    return listNodeToArray(l.next, [...a, l.val]);
  }
  return [...a, l.val];
}

function arrayToListNode(a: number[], l?: ListNode): ListNode {
  if (a.length > 1) {
    return new ListNode(a[0], arrayToListNode(a.slice(1)));
  }

  return new ListNode(a[0], l);
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!(l1 && l2)) {
    return null;
  }

  const num =
    BigInt(listNodeToArray(l1).reverse().join("")) +
    BigInt(listNodeToArray(l2).reverse().join(""));

  const ans = num.toString().split("").reverse().map(Number);

  return arrayToListNode(ans);
}