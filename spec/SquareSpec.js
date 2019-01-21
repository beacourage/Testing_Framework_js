describe('Square', function() {
  it('returns this size squared', function () {
    var square;
    square = new Square(5);
    ExpectEquality(square.area(), 25)
  });

  it('returns the size squared', function() {
    var square;
    square = new Square(5);
    expect(square.area()).toEqual(25);
  });

  it('returns the size', function() {
    var square;
    square = new Square(10);
    expect(square).toEqual(10);
  });
  
});
