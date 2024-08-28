/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prevNode = dummy;
    let firstNode = head;
    let secondNode = head.next;

    while(firstNode && firstNode.next) {
        prevNode.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        
        prevNode = firstNode;
        firstNode = secondNode;
    }
    return dummy.next;
};*/

var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prevNode = dummy;
    
   while(head && head.next) {
    firstNode = head;
    secondNode = head.next;

    prevNode.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    prevNode = firstNode;
    head = firstNode.next;
   }
    return dummy.next;
};
