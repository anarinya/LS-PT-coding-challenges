/*
 * Create a function that returns true if a linked list contains a cycle, or false if it terminates
 *
 * Usually we assume that a linked list will end with a null next pointer, for example:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * const nodeA = Node('A');
 * const nodeB = nodeA.next = Node('B');
 * const nodeC = nodeB.next = Node('C');
 * const nodeD = nodeC.next = Node('D');
 * const nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 * Hint: Search for Floyd's Tortoise and Hare algorithm.
 */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = (next !== null) ? next : null;
  }

  appendTo(value) {
    return new Node(value, this);
  }

  tailNode() {
    let nextThis = this.next || null;
    return (nextThis !== null ? nextThis.tailNode() : null || this);
  }
}

const hasCycle = (list) => {
  let tortoise, hare, nextHare;
  tortoise = list;
  hare = list.next;
  while ((tortoise !== null) && (hare != null)) {
    if (tortoise === hare) return true;
    tortoise = tortoise.next;
    hare = (nextHare = hare.next) !== null ? nextHare.next : void 0;
  }
  return false;
};

const list = new Node('A')
  .appendTo('B')
  .appendTo('C')
  .appendTo('D')
  .appendTo('E');


const nodeA = new Node('A');
const nodeB = nodeA.next = new Node('B');
const nodeC = nodeB.next = new Node('C');
const nodeD = nodeC.next = new Node('D');
const nodeE = nodeD.next = new Node('E');

console.log(hasCycle(list));
list.tailNode().next = list.next;
console.log(hasCycle(list));
console.log(hasCycle(nodeA));
nodeE.next = nodeB;
console.log(hasCycle(nodeB));