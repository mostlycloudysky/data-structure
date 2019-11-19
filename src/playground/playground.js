import DoublyLinkedListNode from './DoublyLinkedListNode';
import Comparator from "../utils/comparator/Comparator"

export default class SanDoublyLinkedList {
    /**
     * @param {Function} [comparatorFunction]
     */
    constructor(comparatorFunction) {
      /** @var LinkedListNode */
      this.head = null;
  
      /** @var LinkedListNode */
      this.tail = null;
  
      this.compare = new Comparator(comparatorFunction);
    }

    prepend(value) {
      let newNode = new DoublyLinkedListNode(value, this.head);

      // If there is head, then it wont be the head anymore
      // Therefore, make its previous reference to be the new node (new head).
      // Mark it as new head
      if (this.head) {
        this.head.previous = newNode;
      } 

      this.head = newNode;

      // If there is no tail, make the new node as a tail.
      if(!this.tail) {
        this.tail = newNode;
      }
      return this;

    }

    append(value) {
      let newNode = new DoublyLinkedListNode(value, this.head);

      // If there is no head, then lets make new node as head
      if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
      }
      return this;

      //Attach node to the end of linked list.
      this.tail.next = newNode;

      // Attach current tail to newnodes previous reference.
      newNode.previous = this.tail;

      // Set new node to be the tail of linked list.
      this.tail = newNode;
      return this;
    }

    delete(value) {
       //Check if there is no nodes
       if(!this.newNode) {
         return null;
       }
       
       let deletedNode = null;
       let currentNode = this.head;

       while(currentNode) {
         if(this.compare.equal(currentNode.value, value)) {
           // If head is going to be deleted...
           // Set the head to second node, which will become new head.
           
         }
       }

    }

}   