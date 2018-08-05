/**
 * A constructor makes an object that is linked to its own prototype
 */

function Foo(who) {
	this.me = who;
}
Foo.prototype.identify = function() {
	return "I am " + this.me;
};

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a2.speak = function() {
	alert("Hello, " + this.identify() + ".");
};

a1.constructor === Foo;
a1.constructor === a2.constructor;
a1.__proto__ === Foo.prototype;
a1.__proto__ === a2.__proto__;

// even though a1 does not possess the identify() method, 
// a1 goes up the prototype chain to find it on Foo.prototype.
// Because of the dynamic nature of 'this' binding, 'this' is bound to a1
a1.identify(); //=> 'I am a1'

a1.identify = function(){
	alert("Hello, " + this.identify() + ".");  
}

a1.identify(); //=> Error infinite recursion - maximum call stack size exceed