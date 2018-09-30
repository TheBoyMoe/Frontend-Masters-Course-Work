// Simple interface for stepping through an iterable object
// calling 'next' returns the next value until there are no more

// certain js objects have the iterator built it - retrieve it using the Symbol.iterator
var arr = [1,2,3,4]
var it = arr[Symbol.iterator]()

// iterating manually - you could do this using a while..loop, checking done value
console.log(it.next()) //=> { value: 1, done: false }
console.log(it.next()) //=> { value: 2, done: false }
console.log(it.next()) //=> { value: 3, done: false }
console.log(it.next()) //=> { value: 4, done: false }
console.log(it.next()) //=> { value: undefined, done: true }

// or use the for..of loop - to automatically loop over an iterable(arrays, strings)
// by default this does not include objects - you can make your own
// calls next until it gets done true
for(let value of arr){
  console.log(value)
}