describe('Square', function() {
  it('returns this size squared', function () {
    var square;
    square = new Square(5);
    ExpectEquality(square.area(), 25)
  });
});
