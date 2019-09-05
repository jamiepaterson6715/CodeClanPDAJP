var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  it('adds one to four to get five', function() {
    calculator.previousTotal =1;
    calculator.add(4);
    assert.equal(5,calculator.runningTotal)
  })

  it('should subtract 4 from 7', function() {
    calculator.previousTotal =7;
    calculator.subtract(4);
    assert.equal(3,calculator.runningTotal)
  })
  it('should multiply 3 by 5', function() {
    calculator.previousTotal =3;
    calculator.multiply(5);
    assert.equal(15,calculator.runningTotal)
  })
  it('should divide 21 by 3', function() {
    calculator.previousTotal =21;
    calculator.divide(3);
    assert.equal(7,calculator.runningTotal)
  })

  it ("should add 2 numbers", function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal,5)
  })
  it ("should subtract", function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal,3)
  })
  it ("should multiply", function(){
    calculator.numberClick(5)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal,15)
  })
  it ("should divide", function(){
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal,3)
  })
  it ("should clear", function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(calculator.runningTotal,0)
  })




});
