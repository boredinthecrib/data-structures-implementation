const { Stack } = require("./Stack");
const { LinkedList } = require("./LinkedList");
const { Queue } = require("./Queue");
const { HashMap } = require("./HashMap");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("should initialize an empty queue", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test("should add an item to the queue using enqueue", () => {
    queue.enqeue(10);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(10);
  });

  test("should remove an item from the queue using dequeue", () => {
    queue.enqeue(20);
    queue.enqeue(30);
    expect(queue.dequeue()).toBe(20);
    expect(queue.peek()).toBe(30);
  });

  test("should return the first item using peek without removing it", () => {
    queue.enqeue(40);
    expect(queue.peek()).toBe(40);
    expect(queue.isEmpty()).toBe(false);
  });

  test("should check if an item exists in the queue", () => {
    queue.enqeue(50);
    expect(queue.exists(50)).toBe(true);
    expect(queue.exists(60)).toBe(false);
  });

  test("should return true for isEmpty when queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqeue(70);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("should return undefined when peeking an empty queue", () => {
    expect(queue.peek()).toBeUndefined();
  });

  test("should return undefined when dequeuing an empty queue", () => {
    expect(queue.dequeue()).toBeUndefined();
  });
});

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("should initialize an empty stack", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test("should add an item to the stack using Add", () => {
    stack.Add(10);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(10);
  });

  test("should remove an item from the stack using Remove", () => {
    stack.Add(20);
    stack.Add(30);
    expect(stack.Remove()).toBe(30);
    expect(stack.peek()).toBe(20);
  });

  test("should return the last item using peek without removing it", () => {
    stack.Add(40);
    expect(stack.peek()).toBe(40);
    expect(stack.isEmpty()).toBe(false);
  });

  test("should check if an item exists in the stack", () => {
    stack.Add(50);
    expect(stack.exists(50)).toBe(true);
    expect(stack.exists(60)).toBe(false);
  });

  test("should return true for isEmpty when stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.Add(70);
    expect(stack.isEmpty()).toBe(false);
    stack.Remove();
    expect(stack.isEmpty()).toBe(true);
  });

  test("should return undefined when peeking an empty stack", () => {
    expect(stack.peek()).toBeUndefined();
  });

  test("should return undefined when removing from an empty stack", () => {
    expect(stack.Remove()).toBeUndefined();
  });
});

describe("LinkedList", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test("should initialize an empty linked list", () => {
    expect(linkedList.size).toBe(0);
    expect(linkedList.head).toBeNull();
  });

  test("should add a node to the linked list", () => {
    linkedList.add(10);
    expect(linkedList.size).toBe(1);
    expect(linkedList.head.data).toBe(10);
  });

  test("should insert a node at a specific index", () => {
    linkedList.add(10);
    linkedList.add(20);
    linkedList.insertAt(15, 1);
    expect(linkedList.getAt(1)).toBe(15);
    expect(linkedList.size).toBe(3);
  });

  test("should not insert a node if index is out of bounds", () => {
    console.error = jest.fn(); // Mock console.error
    linkedList.insertAt(10, 5);
    expect(console.error).toHaveBeenCalledWith("Index out of bounds.");
  });

  test("should remove a node at a specific index", () => {
    linkedList.add(10);
    linkedList.add(20);
    linkedList.add(30);
    linkedList.removeAt(1);
    expect(linkedList.getAt(1)).toBe(30);
    expect(linkedList.size).toBe(2);
  });

  test("should not remove a node if index is out of bounds", () => {
    console.error = jest.fn(); // Mock console.error
    linkedList.removeAt(5);
    expect(console.error).toHaveBeenCalledWith("Index out of bounds.");
  });

  test("should get a node at a specific index", () => {
    linkedList.add(10);
    linkedList.add(20);
    expect(linkedList.getAt(1)).toBe(20);
  });

  test("should return null if getting a node at an invalid index", () => {
    expect(linkedList.getAt(0)).toBeNull();
  });

  test("should clear the linked list", () => {
    linkedList.add(10);
    linkedList.add(20);
    linkedList.clearList();
    expect(linkedList.size).toBe(0);
    expect(linkedList.head).toBeNull();
  });
});

describe("HashMap", () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
  });

  test("should initialize an empty hash map", () => {
    expect(hashMap.getSize()).toBe(0);
  });

  test("should set and get a value", () => {
    hashMap.set("key1", "value1");
    expect(hashMap.get("key1")).toBe("value1");
  });

  test("should update an existing key", () => {
    hashMap.set("key1", "value1");
    hashMap.set("key1", "value2");
    expect(hashMap.get("key1")).toBe("value2");
  });

  test("should return undefined for a non-existent key", () => {
    expect(hashMap.get("missingKey")).toBeUndefined();
  });

  test("should check if a key exists", () => {
    hashMap.set("key1", "value1");
    expect(hashMap.has("key1")).toBe(true);
    expect(hashMap.has("missingKey")).toBe(false);
  });

  test("should delete a key and return true", () => {
    hashMap.set("key1", "value1");
    expect(hashMap.delete("key1")).toBe(true);
    expect(hashMap.has("key1")).toBe(false);
  });

  test("should return false when deleting a non-existent key", () => {
    expect(hashMap.delete("missingKey")).toBe(false);
  });

  test("should clear the hash map", () => {
    hashMap.set("key1", "value1");
    hashMap.set("key2", "value2");
    hashMap.clear();
    expect(hashMap.getSize()).toBe(0);
    expect(hashMap.get("key1")).toBeUndefined();
  });

  test("should resize when load factor exceeds 0.75", () => {
    const initialCapacity = hashMap.capacity;
    for (let i = 0; i < initialCapacity; i++) {
      hashMap.set(`key${i}`, `value${i}`);
    }
    expect(hashMap.capacity).toBeGreaterThan(initialCapacity);
  });
});
