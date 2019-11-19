import SanLinkedList from '../playground';
import SanDoublyLinkedList from '../playground';


describe('playground', () => {
  it('should create empty linked list', () => {
    // Place your playground tests here.
    const linkedList = new SanLinkedList();
    expect(linkedList.toString()).toBe(''); 
  });

  it('should append node to linked list', () => {
    // Place your playground tests here.
    const linkedList = new SanLinkedList();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.toString()).toBe('1,2');
  });

  it('should prepend node to linkedlist', () => {
    const linkedList = new SanLinkedList();

    linkedList.prepend(2);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');

    linkedList.append(1);
    linkedList.prepend(3);

    expect(linkedList.toString()).toBe('3,2,1');
  });

  it('should delete a node by value from linkedlist', () => {
    const linkedList = new SanLinkedList();
    expect(linkedList.delete(5)).toBeNull();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('4');
    const deleteNode = linkedList.delete(3);
    expect(deleteNode.value).toBe(3);
    expect(linkedList.toString()).toBe('1,2,4');
  });

  it('should find a node by value from linkedlist', () => {
    const linkedList = new SanLinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    const node = linkedList.find({value: 2});
    expect(node.value).toBe(2);
  });

  it('should tail node by value from linkedlist', () => {

    const linkedList = new SanLinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    const node = linkedList.find({value: 2});
    expect(linkedList.toString()).toBe('1,2,3');
    const deleteTail = linkedList.deleteTail();
    expect(deleteTail.value).toBe(3);
    expect(linkedList.toString()).toBe('1,2');

  });

  it('should prepand new node into doubly linkedlist', () => {
    const doublyLinkedList = new SanDoublyLinkedList();
    

  });




});
