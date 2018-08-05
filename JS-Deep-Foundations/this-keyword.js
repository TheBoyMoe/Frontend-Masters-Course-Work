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