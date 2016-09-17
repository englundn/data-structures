describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should handle numbers as well as strings', function () {
    set.add('Mel Gibson');
    set.add(5);
    expect(set.contains('Mel Gibson')).to.equal(true);
    expect(set.contains(5)).to.equal(true);
  });

  it('should handle input objects of every type', function () {
    set.add('Mel Gibson');
    set.add(5);
    set.add([4, 3]);
    set.add([[4], [5]]);
    set.add({a: 1, b: 2});
    expect(set.contains('Mel Gibson')).to.equal(true);
    expect(set.contains(5)).to.equal(true);
    expect(set.contains([4, 3])).to.equal(true);
    expect(set.contains([[4], 5])).to.equal(false);
    expect(set.contains([78, 2])).to.equal(false);
    expect(set.contains({a: 1, b: 2})).to.equal(true);
    expect(set.contains({c: 5, d: 2})).to.equal(false);
    console.log(set);
  });

});
