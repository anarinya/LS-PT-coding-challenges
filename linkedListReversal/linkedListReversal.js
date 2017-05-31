module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  printValues() {
    let current = this.head;
    let values = '';
    while (current) {
      values += values.length === 0 ? current.value : `, ${current.value}`;
      current = current.next;
    }
    return values;
  }

  push(value) {
    const node = { value, next: null };
    let current;

    if (!this.head) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let nextNode = null;

    while (current) {
      nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    return previous;
  }
}