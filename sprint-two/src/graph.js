

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);

  if (index > -1) {
    this.nodes.splice(index, 1);
  }

  for (var i = this.edges.length - 1; i > -1; i--) {
    if (this.edges[i].includes(node)) {
      this.edges.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.reduce(this.edges, function(memo, num) {
    return memo || _.isEqual(num, [fromNode, toNode].sort());
  }, false);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode].sort());
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (_.isEqual(this.edges[i], [fromNode, toNode].sort())) {
      this.edges.splice(i, 1);
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: 1
 * contains: n
 * removeNode: n^2
 * hasEdge: n^2
 * addEdge: 1
 * forEachNode = n
 */


