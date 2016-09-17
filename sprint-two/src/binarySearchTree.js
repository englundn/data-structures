var BinarySearchTree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  _.extend(newTree, binaryTreeMethods);
  return newTree;
};


var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  
  var node = this;
  var hasNode = true;

  while (hasNode) {
    if (node.value > value) {
      if (node.left) {
        node = node.left;
      } else {
        hasNode = false;
      }
    } else {
      if (node.right) {
        node = node.right;
      } else {
        hasNode = false;
      }
    }
  }

  if (node.value > value) {
    node.left = BinarySearchTree(value);
  } else {
    node.right = BinarySearchTree(value);
  }
};

binaryTreeMethods.contains = function(value) { 

  var hasValue = true;

  while (hasValue) {
    if (this.value === value) {
      return true;
    } else if (this.value > value) {
      if (this.left) {
        return this.left.contains(value);
      }
    } else {
      if (this.right) {
        return this.right.contains(value);
      }  
    }
    hasValue = false;
  }

  return false;
};

binaryTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

binaryTreeMethods.breadthFirstLog = function(cb) {

  var funName = function(arr) {
    var tempArr = [];
    arr.forEach(function(item) {
      cb(item.value);
      if (item.left) {
        tempArr.push(item.left);
      }

      if (item.right) {
        tempArr.push(item.right);
      }      
    });
    if (tempArr.length) {
      funName(tempArr);
    }
  };

  funName([this]);

};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: log(n)
 * contains: log(n)
 * depthFirstLog: n
 */





