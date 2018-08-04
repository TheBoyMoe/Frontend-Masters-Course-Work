// closure can be as deep as you want
// 

// example 1
function foo(){
  var bar = 'bar';

  function baz(){
    console.log(bar);
  }
  bam(baz);
}

function bam(baz){
  baz();
}

foo();

// example 2
function foo(){
  var bar = 'bar';

  return function(){
    console.log(bar);
  }
}

function bam(){
  foo()();
}

bam();

// example 3 - setTimout
function foo(){
  var bar = 'bar';

  setTimeout(function(){
    console.log(bar);
  }, 1000);
}

foo();

// click handler
function foo(){
  var bar = 'bar';
  $('#btn').click(function(e){
    console.log(bar);
  })
}

foo();

// example 4 - both setTimeout's reference the same 'bar' variable
function foo(){
  var bar = 0;
  setTimeout(function(){
    console.log(bar++);
  }, 1000);
  setTimeout(function(){
    console.log(bar++);
  }, 2000);
}