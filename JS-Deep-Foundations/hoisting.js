/**
 * var - hoisted to the top of their scope and initialized to 'undefined
 * let/const - hoisted to the top of the scope, BUT ARE NOT INITIALIZED.
 *  - You end up getting a ReferenceError if you try to use them before
 *  they're declared
 * 
 * This is NOT affected by 'use strict'
 */

foo();
// more executable code
// .....


//............................
// declare variables and function declarations
// declare let/const variables at the TOP of their initializing scope
var a = '';
var b = 4;

function foo(){
  let c = bar();
  // .....
  return c;

  //..............
  // due to hoisting(compilation phase executed by js run time) this can be reached
  function bar(){
    //.....
  }
}

// hoisting in JS enables mutual recursion - where functions can call each other
//  - this only works with declared functions

// functions a,b and c are loaded into memory during the compilation phase
// executed in the execution phase

a(); // incomplete example, creates an infinite loop

function a(){
  return b();
}

function b(){
  return c();
}

function c(){
  return a();
}

