class Launch {
  constructor(data) {
    this.head = data;
  }
  DisplayLL() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  addFirst(data) {
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
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.next = null;
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
    return;
  }
  inserAtMiddle(pos, data) {
    let newNode = new Node(data);
    if (pos === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    let temp = this.head;
    for (let i = 0; i < pos - 1 && temp != null; i++) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }
  deleteNode(pos) {
    let temp = this.head;
    if (pos == 0) {
      this.head = temp.next;
    }
    for (let i = 0; i < pos - 1; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
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
ll.addAtEnd(40);
ll.inserAtMiddle(4, 50);
ll.deleteNode(1);
ll.DisplayLL();
