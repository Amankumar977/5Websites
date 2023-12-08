class Launch {
  constructor(data) {
    this.head = data;
  }
  addAtEnd(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    newNode.next = null;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
  displayLL(head) {
    let temp = head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  addTwoList(head1, head2) {
    let list1 = [];
    let temp = head1;
    let i = 0;
    while (temp !== null) {
      list1[i++] = temp.data;
      temp = temp.next;
    }
    let list2 = [];
    let temp2 = head2;
    let j = 0;
    while (temp2 !== null) {
      list2[j++] = temp2.data;
      temp2 = temp2.next;
    }
    let value1 = 0;
    for (let k = 0; k < list1.length; k++) {
      value1 *= 10;
      value1 += list1[k];
    }
    let value2 = 0;
    for (let k = 0; k < list2.length; k++) {
      value2 *= 10;
      value2 += list2[k];
    }
    return value1 + value2;
  }
  addValues(addedValue) {
    let num = addedValue.toString();
    let arr = num.split("");
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      let value = arr[i];
      ll3.addAtEnd(value);
    }
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
ll.addAtEnd(5);
ll.addAtEnd(6);
ll.addAtEnd(3);
let ll2 = new Launch();
ll2.addAtEnd(8);
ll2.addAtEnd(4);
ll2.addAtEnd(2);
let addedValue = ll.addTwoList(ll.head, ll2.head);
let ll3 = new Launch();
ll3.addValues(addedValue);
ll.displayLL(ll3.head);
