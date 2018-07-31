// CREATING OBJECTS
// 1. create an object with the assigned properties
const user1 = {
  name: 'Tom',
  score: 23,
  increment: function(){ this.score++; }
}


// 2. create an object literal and assign the properties
const user2 = {};
user2.name = 'Tom';
user2.score = 23;
user2.increment = function(){ this.score++; };


// 3. using Object.create()
const user3 = Object.create(null);
user3.name = 'Tom';
user3.score = 23;
user3.increment = function(){ this.score++; };


// 4. using a function
// NOTE: since 'userCreator' is a object(like all functions), we can assign additional functions via 'prototype'
function userCreator(name, score){
  const user = {};
  user.name = name;
  user.score = score;
  user.increment = function(){ this.score++; }
  return user;
}


// 5. using function constructor and new keyword
function User(name, score){
  this.name = name;
  this.score = score;
  // assign any other properties
}

// use the objects 'prototype' property to assign any functionality
// 'prototype' is a property of the 'User' object, which is it's self an object
User.prototype.increment = function(){ this.score++; }
User.prototype.run = function(){};
User.prototype.swim = function(){};

// use the 'new' keyword to create the user
const user5 = new User('Tom', 4);
// user5's '__proto__' property has a reference to the 'User.prototype' object
user5.increment(); //=> 5

// 6. using 'class' - 'under the hood' the same process is happening as in example 5
// you can assign additional functions to 'User.prototype' as in example 5
class User {
  constructor(name, score){
    this.name = name;
    this.score = score;
    // assign any other properties
  }

  increment(){
    this.score++;
  }

  run(){
    // ....
  }
}

// the object is created and methods called in the same way
const user6 = new User('Tom', 3);
user6.increment(); //=> 4