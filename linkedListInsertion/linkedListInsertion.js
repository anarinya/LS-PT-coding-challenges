/*
 * Create a linked list that maintains a sorted order to it's elements.
 * When you insert a new element insert it at it's appropriate position.
 * Example: [1] -> [2] -> [3]
 * list.insert(2);
 * [1] -> [2] -> [2] -> [3]
 * Bonus: Write automated tests
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  insert(val) {
    let current;
    const node = {
      value: val,
      next: null
    };

    if (!this.head) {
      this.head = node;
    }
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}

let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(2);


console.log(list.print());