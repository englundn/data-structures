

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this.getIndexBelowMaxForKey = getIndexBelowMaxForKey;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var subindex = this._storage[index].length;

  // this._storage[index].set(subindex, [k, v]);

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var tempArr = this._storage.get(index);
    if (this.retrieve(k)) {
      var subIndex = _.pluck(tempArr, 0).indexOf(k);

      tempArr[subIndex] = [k, v];
    } else {
      tempArr.push([k, v]);
    }

    this._storage.set(index, tempArr);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var tempArr = this._storage.get(index).filter(function(item) {
    return item[0] === k;
  });

  if (tempArr.length) {
    return tempArr[0][1];
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tempArr = this._storage.get(index);
  var subIndex = _.pluck(tempArr, 0).indexOf(k);

  delete tempArr[subIndex];

  this._storage.set(index, tempArr);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: 1 
 * retrieve:  
 * remove:
 */


