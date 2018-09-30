var name = 'Joe'
var age = 23
var occupation = 'Artist'

// use '\' for string continuation when concatenating strings
var msg = "Hello, my name is " + name + "I'm "
+ age + " years old \
 and work as a " + occupation + "."

// printed over a single line
console.log(msg) //=> 'Hello, my name is JoeI'm 23 years old and work as a Artist.'

msg = `Hello, my name is ${name} I'm
${age}years old and work as a ${occupation}.`
console.log(msg) //=> printed over 2 lines - multiline string

msg = `Hello, my name is ${name} I'm \
${age} years old and work as a ${occupation}.`
console.log(msg) //=> printed over a single line
