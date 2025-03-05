class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return console.error("Index out of bounds.");
    }

    if (index === 0) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const newNode = new Node(data);
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return console.error("Index out of bounds.");
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  getAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }
    return current.data;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    console.log(str);
  }
}

module.exports = { LinkedList };
