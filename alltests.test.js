const { Stack } = require("./Stack");
const { LinkedList } = require("./LinkedList");
const { Queue } = require("./Queue");
const { HashMap } = require("./HashMap");
const { PriorityHeap } = require("./PriorityHeap");
const { BinaryTree } = require("./BinaryTree");
const { Graph } = require("./Graph");

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

describe("PriorityHeap", () => {
  let heap;

  beforeEach(() => {
    heap = new PriorityHeap();
  });

  test("should initialize an empty heap", () => {
    expect(heap.isEmpty()).toBe(true);
    expect(heap.size()).toBe(0);
  });

  test("should insert elements and maintain heap property", () => {
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(3);

    expect(heap.peek()).toBe(3); // Smallest element should be at the root
    expect(heap.size()).toBe(4);
  });

  test("should extract the minimum element and maintain heap structure", () => {
    heap.insert(10);
    heap.insert(5);
    heap.insert(20);
    heap.insert(3);

    expect(heap.extractMin()).toBe(3);
    expect(heap.peek()).toBe(5);
    expect(heap.size()).toBe(3);
  });

  test("should return null when extracting from an empty heap", () => {
    expect(heap.extractMin()).toBeNull();
  });

  test("should return null when peeking into an empty heap", () => {
    expect(heap.peek()).toBeNull();
  });

  test("should return the correct size of the heap", () => {
    heap.insert(15);
    heap.insert(25);
    expect(heap.size()).toBe(2);
  });

  test("should return true for isEmpty when heap is empty", () => {
    expect(heap.isEmpty()).toBe(true);
    heap.insert(8);
    expect(heap.isEmpty()).toBe(false);
  });
});

describe("BinaryTree", () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  test("should initialize an empty tree", () => {
    expect(tree.root).toBeNull();
  });

  test("should insert elements into the tree", () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    expect(tree.root.data).toBe(10);
    expect(tree.root.left.data).toBe(5);
    expect(tree.root.right.data).toBe(15);
  });

  test("should correctly search for existing values", () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    expect(tree.search(10)).toBe(true);
    expect(tree.search(5)).toBe(true);
    expect(tree.search(15)).toBe(true);
  });

  test("should return false for non-existent values", () => {
    tree.insert(10);
    tree.insert(5);

    expect(tree.search(20)).toBe(false);
    expect(tree.search(3)).toBe(false);
  });

  test("should perform inorder traversal correctly", () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(2);
    tree.insert(7);

    const consoleSpy = jest.spyOn(console, "log");
    tree.inorder(tree.root);

    expect(consoleSpy.mock.calls.map((call) => call[0])).toEqual([
      2, 5, 7, 10, 15,
    ]);
    consoleSpy.mockRestore();
  });

  test("should perform preorder traversal correctly", () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(2);
    tree.insert(7);

    const consoleSpy = jest.spyOn(console, "log");
    tree.preorder(tree.root);

    expect(consoleSpy.mock.calls.map((call) => call[0])).toEqual([
      10, 5, 2, 7, 15,
    ]);
    consoleSpy.mockRestore();
  });

  test("should perform postorder traversal correctly", () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(2);
    tree.insert(7);

    const consoleSpy = jest.spyOn(console, "log");
    tree.postorder(tree.root);

    expect(consoleSpy.mock.calls.map((call) => call[0])).toEqual([
      2, 7, 5, 15, 10,
    ]);
    consoleSpy.mockRestore();
  });
});

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test("should initialize an empty adjacency list", () => {
    expect(graph.adjacencyList.size).toBe(0);
  });

  test("should add vertices to the graph", () => {
    graph.addVertex("A");
    graph.addVertex("B");

    expect(graph.adjacencyList.has("A")).toBe(true);
    expect(graph.adjacencyList.has("B")).toBe(true);
  });

  test("should add edges between vertices", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");

    expect(graph.hasEdge("A", "B")).toBe(true);
    expect(graph.hasEdge("B", "A")).toBe(true);
  });

  test("should remove edges between vertices", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    graph.removeEdge("A", "B");

    expect(graph.hasEdge("A", "B")).toBe(false);
    expect(graph.hasEdge("B", "A")).toBe(false);
  });

  test("should remove a vertex and all its edges", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.removeVertex("A");

    expect(graph.adjacencyList.has("A")).toBe(false);
    expect(graph.hasEdge("B", "A")).toBe(false);
    expect(graph.hasEdge("C", "A")).toBe(false);
  });

  test("should return neighbors of a given vertex", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");

    expect(graph.getNeighbors("A")).toEqual(["B", "C"]);
  });
});
