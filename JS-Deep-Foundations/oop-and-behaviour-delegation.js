var Foo = {
  init: function(who){
    this.me = who;
  },
  identity: function(){
    return `I am ${this.me}`;
  }
}

var Bar = Object.create(Foo); // create link to Foo obj
Bar.speak = function(){
  return `Hello, ${this.identity()}`;
}

var b1 = Object.create(Bar); // instantiate Bar obj
b1.init('b1');
b1.speak(); // 'Hello, I am b1' 
