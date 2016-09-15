var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    if (list.head) {
      var currentNode = list.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = Node(value);
    } else {
      list.head = newTail;
    }
    list.tail = Node(value);
    // debugger;
  };

  list.removeHead = function() {
    var headVal = list.head.value;
    list.head = list.head.next;
    return headVal;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return currentNode.value === target;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */