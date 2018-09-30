function foo(){
  // return [1,2,3,4]
  return null //=> TypeError
}

// assignment context '...args' - gather values
var [a, b = 42, c, ...args] = foo() || []

console.log(a,b,c)

// var o = {}
//  [
//   o.a, 
//   o.b = 42, 
//   o.c
// ] = foo() || []

// console.log(o)

// array destructuring uses position
var a = [1,2,3,4]
var [, , ...b] = [0, ...a, 5, 6]

var [a, b, c, ...args] = [1,2,3,[4,5,6]]
console.log(args) //=> [[4,5,6]]

var [a, b, c, [d, e, f]] = [1,2,3,[4,5,6]]
console.log(d,e,f) //=> 4,5,6

var [a, b, c, [ d, e, [f, [g, [h]]]]] = [1,2,3,[4,5,[6, [7,[8]]]]]
console.log(f, g, h) //=> 6,7,8