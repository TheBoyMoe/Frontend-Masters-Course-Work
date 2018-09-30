function foo(){
  return {a:1, b:2, c:3, d:4}
}

var {c} = foo() || {}

console.log(c)

var {a: e, b: f, c: g, d: h} = foo() || {}
// console.log(a,b,c,d) //=> ReferenceError

console.log(e,f,g,h) //=> 1,2,3,4

var {a: e, f: g = 12, h = 22, i} = foo() || {}
console.log(e, g, h, i) //=> 1,12,22, undefined

function bar(){
  return {a:1, b:2, c:3, d: {e:5, f: {g:6, h:7} }}
}
var {d: {e, f: {g, h}}} = bar() || {}

console.log(e,g,h) //=> 5,6,7

function baz(){
  return {a:1, b:2, c:3}
}
// var {d: {e, f: {g, h}}} = baz() || {}
// console.log(e,g,h) //=> TypeError -> cannot destructure undefined property 'e'

// var {d: {e, f: {g, h}} = {}} = baz() || {}
// console.log(e,g,h)  //=> TypeError -> cannot destructure undefined property 'g'

// var {d: {e, f: {g, h} = {}} = {}} = baz() || {}
// console.log(e,g,h) //=> undefined x3

var {d: {e = 3, f: {g = 4, h = 5} = {}} = {}} = baz() || {}
console.log(e,g,h) //=> 3,4,5



// you can mix array and object destructuring
function bat(){
  return {a:1, b:2, c:3, d: [4,5,6]}
}

var {d: [e = 3, f , g, h = 10 ] = []} = bat() || {}
console.log(e,f,g,h) //=> 4,5,6,10

// Destructuring arrays and objects
function fn([,,c,d] = []){
  console.log(c,d)
}

fn([1,2,3,4,5,6]) //=> 3,4, TypeError if you pass a value other than an array

function fnObj({a,b = 10, c} = {}){
  console.log(a,b,c)
}

fnObj({a: 2, c: 5}) //=> 2,10,5
