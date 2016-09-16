var DoublyLinkedList = function() {
  
  var newDLL = Object.create(DLLMethods);

  newDLL.head = null;
  newDLL.tail = null;

  return newDLL;
};

var DLLMethods = {};

DLLMethods.addToTail = function(value) {
  if (this.tail) {
    this.tail.next = Node(value);
    this.tail.next.previous = this.tail;
    this.tail = this.tail.next;
  } else {
    this.tail = Node(value);
    this.head = this.tail;
  }
};

DLLMethods.addToHead = function(value) {
  if (this.head) {
    this.head.previous = Node(value);
    this.head.previous.next = this.head;
    this.head = this.head.previous;
  } else {
    this.head = Node(value);
    this.tail = this.head;
  }
};

DLLMethods.removeTail = function() {
  var tailVal = this.tail.value;
  if (this.tail.previous) {
    this.tail = this.tail.previous;
    this.tail.next = null;
  } else {
    this.head = null;
    this.tail = null;
  }
  return tailVal;
};

DLLMethods.removeHead = function() {
  var headVal = this.head.value;
  if (this.head.next) {
    this.head = this.head.next;
    this.head.previous = null;
  } else {
    this.head = null;
    this.tail = null;
  }
  return headVal;
};

DLLMethods.contains = function(target) {
  var currentNode = this.head;
  
  while (currentNode.next) {
    if (currentNode.value === target) {
      return true;
    }
    currentNode = currentNode.next;
  }

  return currentNode.value === target;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};