// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/
/*** CHALLENGE 1 of 1 ***/
/**
  Create a function that accepts two inputs (name and age) and returns an object. 
  Let's call this function makePerson. This function will:
    1. create an empty object
    2. add a name property to the newly created object with its value being the 'name' 
    argument passed into the function
    3. add an age property to the newly created object with its value being the 'age' 
    argument passed into the function
    4. return the object
*/

function makePerson(name, age) {
	// add code here
	const user = {};
  user.name = name;
  user.age = age;
	return user;
}

var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
 /** 
  *  Inside personStore object, create a property greet where the value is a function that logs "hello".
 */

var personStore = {
	// add code here
  greet: function(){
  	console.log('hello');
	}
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'


/*** CHALLENGE 2 of 3 ***/
/**
 * Create a function personFromPersonStore that takes as input a name and an age. 
 * When called, the function will create person objects using the Object.create method on the personStore object.
 */

function personFromPersonStore(name, age) {
	// add code here
	const person = Object.create(personStore);
  person.name = name;
  person.age = age;
	return person;
}

var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'


/*** CHALLENGE 3 of 3 ***/
/**
 * Without editing the code you've already written, 
 * add an introduce method to the personStore object that logs "Hi, my name is [name]".
 */
// add code here
personStore.introduce = function(){
  console.log("Hi, my name is " + this.name);
}

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
/**
 * Create a function PersonConstructor that uses the this keyword to save a single 
 * property onto its scope called greet. greet should be a function that logs the string 'hello'.
 */
function PersonConstructor() {
	// add code here
	this.greet = function(){
    console.log('hello');
  }
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/
/**
 * Create a function personFromConstructor that takes as input a name and an age. 
 * When called, the function will create person objects using the new keyword instead of the Object.create method.
 */
function personFromConstructor(name, age) {
	// add code here
  const person = new PersonConstructor();
	person.name = name;
	person.age = age;
  return person;
}

var mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
/**
 * Without editing the code you've already written, 
 * add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".
 */
// add code here
PersonConstructor.prototype.introduce = function(){
  console.log('Hi, my name is ' + this.name);
}

mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 2 ***/

class PersonClass {
	constructor(name) {
    // add code here
		this.name = name;
	}

	// add code here
	greet(){
  	console.log('hello');
	}
}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 2 ***/
/**
 * Create a class DeveloperClass that creates objects by extending the PersonClass class. 
 * In addition to having a name property and greet method, DeveloperClass should have an introduce method. 
 * When called, introduce should log the string 'Hello World, my name is [name]'.
 */
// add code here
class DeveloperClass extends PersonClass {
  constructor(name, age){
    super(name);
    this.age = age;
  }
  introduce(){
  	console.log('Hello World, name name is ' + this.name);
	}
}

// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore /* Put code here */ ;

function adminFactory(name, score) {
  // Put code here
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
