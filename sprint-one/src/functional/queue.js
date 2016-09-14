var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enqueued = 0;
  var dequeued = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enqueued] = value;
    enqueued++;
  };

  someInstance.dequeue = function() {
    if (enqueued > dequeued) {
      var result = storage[dequeued];
      delete storage[dequeued];
      dequeued++;
      return result;
    }
  };

  someInstance.size = function() {
    return enqueued - dequeued;
  };

  return someInstance;
};
