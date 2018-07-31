// CREATING OBJECTS
// 1. create an object with the assigned properties
const user1 = {
  name = '....',
  ...
  run = function(){}
}


// 2. create an object literal and assign the properties
const user2 = {};
user2.name = '...';
user2.fun = function(){};


// 3. using Object.create()
const user3 = Object.create(null);
user3.name = '...';
user3.fun = function(){};


// 4. using a function
function userCreator(name, ...etc){
  const user = {};
  user.name = name;
  // assign other properties
  user.run = function(){}

  return user;
}


// 5. using function constructor and new keyword
function User(name, score, ...etc){
  this.name = name;
  this.score = score;
  // assign other properties
}

// use the objects 'prototype' property to assign any functionality
User.prototype.increment = function(){ this.score++; }
User.prototype.run = function(){};
User.prototype.swim = function(){};

// use the 'new' keyword to create the user
const user5 = new User('Tom', 4);
user5.increment(); //=> 5

// 6. using 'class'
class User {
  constructor(name, score, ...etc){
    this.name = name;
    this.score = score;
    // assign any more properties
  }
    
  increment(){
    this.score++;
  }

  run(){
    // ....
  }
}

const user6 = new User('Tom', 3);
user6.increment(); //=> 4