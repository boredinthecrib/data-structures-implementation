class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList.set(
      vertex1,
      this.adjacencyList.get(vertex1).filter((vertex) => vertex !== vertex2)
    );
    this.adjacencyList.set(
      vertex2,
      this.adjacencyList.get(vertex2).filter((vertex) => vertex !== vertex1)
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList.get(vertex).length) {
      const adjacentVertex = this.adjacencyList.get(vertex).pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    this.adjacencyList.delete(vertex);
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList.has(vertex1) &&
      this.adjacencyList.get(vertex1).includes(vertex2)
    );
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }
}

module.exports = { Graph };
