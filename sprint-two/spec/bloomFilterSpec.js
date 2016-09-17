describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = BloomFilter(18, 3);
  });

  it('should have methods named "insert" and "mayContain"', function() {
    expect(bloomFilter.insert).to.be.a('function');
    expect(bloomFilter.mayContain).to.be.a('function');
  });

  it('should have a working "mayContain" method', function() {
    bloomFilter.insert(3);
    bloomFilter.insert(7);
    bloomFilter.insert(2);
    bloomFilter.insert('foo');
    bloomFilter.insert('bar');
    var counter = 0;
    for (var i = 0; i < 100000; i++) {
      if (bloomFilter.mayContain(Math.random() * 10)) {
        counter++;
      }
    }
    console.log(counter);

    expect(bloomFilter.mayContain(7)).to.equal(true);
    expect(bloomFilter.mayContain('foo')).to.equal(true);
    expect(bloomFilter.mayContain('bar')).to.equal(true);
    expect(bloomFilter.mayContain('baz')).to.equal(true);
    expect(bloomFilter.mayContain('7')).to.equal(false);
    expect(bloomFilter.mayContain(8)).to.equal(false);
  });  

});
