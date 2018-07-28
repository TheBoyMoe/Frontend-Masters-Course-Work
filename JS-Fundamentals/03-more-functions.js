var add = function(a, b = 2) {
  // arguments will not contain defail values if that arg is not used
  console.log(arguments);
  return a + b;
};

add(3);
//=> log -> 3
//=> return -> 5

// implementation before es6 default values
add = function(a, b){
  b = b || 2;
  return a + b;
};

// implementation of _.from
const _ = {};
_.from = function(arr){
  const array = [];
  for(let i = 0; i < arr.length; i++){
    array.push(arr[i]);
  }
  return array;
};

// Alternate implementation
_.from = function(arr){
  return Array.prototype.slice.call(arr);
};


///// Scope
let firstFn = function(){
  var localVariable = 'local';
  return secondFn();
};

let secondFn = function(){
  return 'second Fn';
};


//// Callbacks
const ifElse = (condition, isTrue, isFalse) => {
  return (condition)? isTrue : isFalse;
};

ifElse(true, ()=> console.log(true), ()=> console.log(false));

//=> ()=> console.log(true)

const increment = (n) => n + 1;
const square = (n) => n*n;
const doTheMaths = (n, fn) => fn(n);