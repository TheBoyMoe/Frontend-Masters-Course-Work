//////////////////////////////////////////////////
// Spread operator works on anything that is an iterable, e.g. arrays, strings 

function foo(x = 42){
	console.log(x)
} 

foo(0) //=> 0
foo(null) //=> null
foo(undefined) //=> 42
foo([]) //=> []
foo({}) //=> {}

foo.apply(null, []) //=> 42
foo.call(null, 13) //=> 13

foo.apply(null, [13]) //=> 13

function bar(x = 10, y = 20, z = 30){
	console.log(x,y,z)
}

bar.call(null, 5,4,3,2,1) //=> 5,4,3
bar.apply(null, [1,2,3,4,5]) //=> 1,2,3

function foo(...args){
	return bar(42, ...args)
}

function bar(...args){
	return args
}
