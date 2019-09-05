var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('number buttons update the display of the running total', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('99')
  })

 it('its arithmetical operations update the display with the result of the operation', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number6')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number5')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('11')
 })

 it('multiple operations can be chained together', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number6')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number7')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number7')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('7')
})
it('The output is as expected for very large numbers positive and negative decimals', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number9')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number1000')).click();
   element(by.css('#number1')).click();
   element(by.css('#number0')).click();
   element(by.css('#number0')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number10000.5')).click();
   // element(by.css('#number0')).click();
   // element(by.css('#number0')).click();
   // element(by.css('#number0')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('-1000.5')
 })

});
