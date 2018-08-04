/**
 * A closure is a characteristic of a function in a lexically scoped environment
 * which allows that function to continue to access variables outside of itself
 * even when that function is passed/executed in a different lexical scope.
 * 
 * A closure has access to variables in it's lexical scope(created in it's outer scope), 
 * even when it is executed outside of that lexical scope
 * 
 * That scope will remain in memory while there exists a closure that has a reference to it
 */


// closure and loops
// all the setTimeout's created share a reference to the 
// the same 'i' variable - only one version of 'i' is created
// in the global scope
for(var i = 1; i <= 5; i++){
  setTimeout(function(){
    console.log('i: ', i);
  }, 1000);
}
//=> 5,5,5,5,5

// solution using an iife
// each iteration of the loop we are declaring a new 'i' variable
for(var i = 1; i <= 5; i++){
  (function(i){ // declaring i
    setTimeout(function(){
      console.log('i: ', i);
    }, i * 1000);
  })(i); // passing in the current value
}
//=> 1,2,3,4,5

// solution using let
for(let i = 1; i <= 5; i++){
  let j = i; // we declare a new version of j each iteration, in a new block
  setTimeout(function(){
    console.log('i: ', j);
  }, i * 1000);
}
//=> 1,2,3,4,5

// we declare a new version of i for each iteration
for(let i = 1; i <= 5; i++){
  setTimeout(function(){
    console.log('i: ', i);
  }, i * 1000);
}
//=> 1,2,3,4,5
