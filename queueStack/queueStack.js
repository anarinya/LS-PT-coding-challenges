/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */
// Stack: Stack of plates, with push and pop (LIFO)
// Queue: Line of people, with push and shift (FIFO)

class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  sPush(item) {
    this.stack[this.length] = item;
  }

  sPop() {
    const val = this.stack[this.length];
    const update = [];
    for (let i = 0; i < this.stack.length; i++) {
      update.push(this.stack[i]);
    }
    this.stack = update;
    return val;
  }

   sPrint() {
   console.log(this.stack);
  }
}

const newStack = new Stack();
newStack.sPush(1);
newStack.sPush(2);
newStack.sPush(3);
newStack.sPush(4);
newStack.sPush(5);
newStack.sPop();
newStack.sPop();
newStack.sPrint();
