var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};

  newQueue.enqueued = 0;
  newQueue.dequeued = 0;
  
  newQueue.storage = {};

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.enqueued - this.dequeued;
};

queueMethods.enqueue = function(value) {
  this.storage[this.enqueued] = value;
  this.enqueued++;
};

queueMethods.dequeue = function() {
  if (this.enqueued > this.dequeued) {
    var result = this.storage[this.dequeued];
    delete this.storage[this.dequeued];
    this.dequeued++;
    return result;
  }
};