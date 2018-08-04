// use iife's 
// 1. when you do not want to polute the global name space
// 2. want to create scope
// 3. need a function to be immediately invoked

var foo = 'foo';

(function bar(){
  var foo = 'bar'
  console.log(foo);
})();

console.log(foo);

// the value 'bar' is passed in to 'baz' as the arg 'value'
//  - allows you to re-name your variables  
(function baz(value){
  var foo = value;
  console.log(foo);
})(bar);


for(var i = 0; i < 5; i++){
  // create a block of scope with each iteration
  // a different 'j' is declared each iteration of the loop
  // without the iife, j would be declared once on the global 
  // scope/enclosing scope(if the loop is in a function)
  // same result can be achieved by declaring 'j' using the 'let' keyword 
  (function iife(){
    var j = i;
    console.log(j);
  })();
}
