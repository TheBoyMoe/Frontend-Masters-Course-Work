// 'this' binding in js depends upon the context in which the 
// function is called, not on where it's defined
// - as such we have no control on the value of 'this'

// implicit & default binding, 
function foo(){
  console.log(this.bar);
}

var bar = 'bar1';
var o2 = { bar: 'bar2', foo: foo }
var o3 = { bar: 'bar3', foo: foo }

// in 'sloppy mode' 'this' binds to 'window'
// in 'strict mode', 'this' is undefined, foo() throws an error
foo(); //=> 'bar1'

// 'this' refers to the object the method is called on
o2.foo(); //=> 'bar2' 
o3.foo(); //=> 'bar3'


// explicit binding - calling a function with call()/apply()
// the obj passed to call() is used for the 'this' binding
var obj = { bar: 'bar4' };
foo.call(obj); //=> 'bar4'

// hard binding - control the value of 'this'
var obj2 = { bar: 'bar5' };
var orig = foo;
foo = function(){
  orig.call(obj);
}

// the 'this' value has been hard bound - line 32
// so it does not matter how foo is called, it ignores any subsequent
// attempts at setting the 'this' value
foo.call(obj2); //=> 'bar4'

// Using .bind()
// the .bind() is a utility method for 'hard' binding 'this' value
function foo(baz, bam){
  console.log(`${this.bar} ${baz} ${bam}`);
}

foo = foo.bind(obj, 'baz');
foo('bam'); //=> 'bar4 baz bam'

/**
 * New keyword and 'this'
 *
 * the new keyword does 4 things
 * 1. creates a new empty obj
 * 2. the new obj is linked to another object
 * 3. the new obj is passed in as the 'this' context to the function call
 * 4. the new obj is implicitly returned by the function call
 * 
 */

 /**
  * Rules for determining what 'this' points at for any function containing 'this'
  * (NOTE: order of precedence, 'new' keyword trumps a 'hard' binding)
  * 
  * 1. is the function called by 'new'? --> use the newly created obj
  * 2. is the function called by call(), apply() or bind()? --> use the explicitly provided obj
  * 3. is the function called on a context obj(a method call on an obj)? --> use that obj
  * 4. DEFAULT to global obj, except in 'strict mode' where 'this' is undefined
  * 
  * To explicitly set 'this', use call() or apply()
  * To lock a specific 'this' to a function use bind()
  * To create a new 'this', use the 'new' keyword
  */

/**
 * Arrow functions and 'this'
 * 
 * Arrow functions do NOT have a 'this' keyword, which means when you have an
 * arrow function with 'this', it is treated a variable
 * - which results in it looking up the scope chain like any function would when 
 * determining the value of that variable - arrow functions have a 'this' that behaves
 * by lexical rules - it looks to it's enclosing scope
*/

function foo(){
  return () => this.bar;
}

var bar = 'bar1';
var o1 = { bar: 'bar2', foo: foo };
var o2 = { bar: 'bar3' };

var f1 = foo(); //=> 'this' === window
var f2 = o1.foo(); //=> 'this' === o1 obj
var f3 = foo.call(o2); //=> 'this' === o2 obj

f1(); //=> 'bar1'
f2(); //=> 'bar2'
f3(); //=> 'bar3'

f1.call(o2); //=> 'bar1'
