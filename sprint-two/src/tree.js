var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  var index = this.parent.children.indexOf(this);
  var childArr = this.parent.children.splice(index, 1)[0];
  childArr.parent = null;
  return childArr;
};

treeMethods.traverse = function(cb) {
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
  if (this.value) {
    cb(this.value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: 1
 * contains: n
 * removeFromParent: n
 */