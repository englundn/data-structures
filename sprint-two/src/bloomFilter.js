
var BloomFilter = function(m, k) {
  
  var newBloom = {};

  newBloom.bitArray = Array(m);

  newBloom.insert = function(value) {
    for (var i = 0; i < k; i++) {
      newBloom.bitArray[hashFn('' + i + JSON.stringify(value), m)] = 1;
    }
  };

  newBloom.mayContain = function(value) {
    

    for (var i = 0; i < k; i++) {
      if (!(newBloom.bitArray[hashFn('' + i + JSON.stringify(value), m)])) {
        return false;
      }
    }

    return true;

  };

  return newBloom;

};

var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
