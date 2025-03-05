class Queue {
  constructor() {
    this.items = [];
  }

  peek() {
    return this.items[0];
  }

  dequeue() {
    return this.items.shift();
  }

  enqeue(value) {
    this.items.push(value);
  }

  exists(value) {
    return this.items.includes(value);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = { Queue };
