

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
    this._size++;
  } else {
    var tempArr = this._storage.get(index);
    if (this.retrieve(k)) {
      var subIndex = _.pluck(tempArr, 0).indexOf(k);

      tempArr[subIndex] = [k, v];
    } else {
      tempArr.push([k, v]);
      this._size++;
    }

    this._storage.set(index, tempArr);
  }

  // console.log(this._size);

  if (this._size > this._limit * 0.75) {
    this._limit *= 2;
    this.reHash();
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var tempArr = this._storage.get(index).filter(function(item) {
    return item[0] === k;
  });

  return tempArr.length ? tempArr[0][1] : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tempArr = this._storage.get(index);
  if (tempArr) {
    var subIndex = _.pluck(tempArr, 0).indexOf(k);

    if (subIndex > -1) {
      delete tempArr[subIndex];
      this._size--;
    }

    this._storage.set(index, tempArr);
  }
  if (this._limit > 8) {
    if (this._size < this._limit * 0.25) {
      this._limit /= 2;
      this.reHash();
    }
  }

};

HashTable.prototype.reHash = function() {
  this._size = 0;
  var tempArr = [];

  this._storage.each(function(item) {
    if (item) {
      item.forEach(function(ele) {
        tempArr.push(ele);
      });
    }
  });

  this._storage = LimitedArray(this._limit);

  for (var i = 0; i < tempArr.length; i++) {
    this.insert(tempArr[i][0], tempArr[i][1]);
  }

  // console.log(tempArr);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: 1 
 * retrieve:  
 * remove:
 */


