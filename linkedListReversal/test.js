const LinkedList = require('./linkedListReversal.js');

describe('LinkedList', () => {
  it('should store a given value in the head, when no prior head is present', () => {
    const list = new LinkedList();
    list.push(2);
    expect(list.head.value).toBe(2);
  });

  it('should have nothing in the "next" property when only one node exists', () => {
    const list = new LinkedList();
    list.push(2);
    expect(list.head.next).toBe(null);
  });

  it('should point to a second node after it\'s added', () => {
    const list = new LinkedList();
    list.push(2);
    list.push(3);
    expect(list.head.next.value).toBe(3);
  });

  describe('printValues', () => {
    it('should print the values when invoked', () => {
      const list = new LinkedList();
      let output = '';
      list.push(2);
      list.push(3);
      output = list.printValues();
      expect(output).toBe('2, 3');
    });
  });

  describe('reverse', () => {
    it('should reverse the values when invoked', () => {
      const list = new LinkedList();
      let output = '';
      list.push(55);
      list.push(22);
      list.push(33);
      console.log(list);
      list.reverse();
      console.log(list);
      output = list.printValues();
      expect(output).toBe('33, 22, 55');
    });
  });
});