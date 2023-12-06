class Launch {
  head;
  constructor() {
    this.head = null;
  }
  addAtFirst(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  addAtEnd(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = null;
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
    return;
  }
  displayLL() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data + " ");
      temp = temp.next;
    }
  }
  deleleLL(position) {
    if (this.head == null) {
      return;
    }
    let temp = this.head;
    if (position === 0) {
      this.head = temp.next;
    }
    for (let i = 0; i < position - 1 && temp !== null; i++) {
      temp = temp.next;
    }
    if (temp.next === null && temp == null) {
      return;
    }
    temp.next = temp.next.next;
  }

  insertInMiddle(position, data) {
    let newNode = new Node(data);
    if (position === null) {
      console.log("The pointer is at last idex");
      return;
    }
    newNode.next = position.next;
    position.next = newNode;
  }
  reverseLL(curr, prev) {
    if (curr === null) {
      this.head = prev;
      return;
    }
    const nextPtr = curr.next;
    curr.next = prev;
    this.reverseLL(nextPtr, curr);
  }
}
class Node {
  data;
  next;
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let ll = new Launch();
ll.addAtEnd(10);
ll.addAtEnd(20);
ll.addAtEnd(30);
ll.reverseLL(ll.head, null); // Ensure you start the reversal from the head
ll.displayLL();
