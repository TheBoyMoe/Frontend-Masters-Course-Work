// Module Pattern ES5

// encapsulation - hiding details (variables/methods) you don't want the out side world to access
// both the variable and method in this case are accessible to the outside world

// a module must have an enclsing scope - usually a function(that runs at least once)
// a module must have at least one function that is returned that retails a closure over the internal state 

/**
 * Benefits of the module pattern
 *  - code organisation
 *  - hiding variables/methods we do not wish to be accessible
 *  - prevent variable name collisions
 */

var foo = {
  o: { bar: 'bar'},
  bar(){
    console.log(this.o.bar);
  }
}

// implementing modules using an iife(& closure) - classic module pattern
// using the iife pattern creates a singleton
var foo = (function(){
  var o = { bar: 'bar' };

  return {
    bar: function(){
      console.log(o.bar);
    }
  }
})();

foo.bar(); //=> 'bar'

// modification of  the pattern giving you internal access to your public api
var foo = (function(){
	var publicAPI = {
		bar: function(){
			publicAPI.baz();
		},
		baz: function(){
			console.log("baz");
		}
	};
	return publicAPI;
})();

foo.bar(); //=> 'baz'



// above example could be implemented without using the iife
var foo = function(){
  var o = { bar: 'bar' };

  return {
    bar: function(){
      console.log(o.bar);
    }
  }
};

foo().bar(); //=> 'bar'