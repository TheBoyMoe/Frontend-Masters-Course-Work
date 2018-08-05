class Foo {
  constructor(who){
    this.me = who;
  }

  identify(){
    return `I am ${this.me}`;
  }

  whoAmI(){
    return `I am ${this.me}`;
  }

  // es6 added 'static' methods, can be called on the class
  static hello(){ return 'Hello!' }; 
}

var a1 = new Foo('a1');
var a2 = new Foo('a2');

a1.identify(); //=> 'I am a1'
a2.identify(); //=> 'I am a2

class Bar extends Foo {
  // you can call methods in the parent
  speak(){
    return `Hello, ${this.whoAmI()}.`; // goes up the prototype chain
  }

  // you can 'shadow/override' methods in the parent and still call
  // the method in the parent using the 'super' keyword
  identify(){
    return `Hello, ${super.identify()}`
  }
}

var b1 = new Bar('b1');
var b2 = new Bar('b2');

b1.speak(); //=> 'Hello, I am b1'
b2.speak(); //=> 'Hello, I am b2'

// using static methods
Foo.hello(); //=> 'Hello'
Bar.hello(); //=> 'Hello'