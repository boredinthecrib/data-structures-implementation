class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  Remove() {
    return this.items.pop();
  }

  Add(value) {
    this.items.push(value);
  }

  exists(value) {
    return this.items.includes(value);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = { Stack };
