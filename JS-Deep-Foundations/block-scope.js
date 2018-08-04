const {log} = console;

function diff(x, y){
  if(x > y){
    let tmp = x;
    x = y;
    y = tmp;
    var a = x;
  }

  // 'tmp' causes a reference error - is not defined
  // 'a' is accessible - block scope applies only to let/const variables
  log('tmp', tmp, 'a', a); 
  return y - x;
}

// using blocks to declare variables that are only required within the block
// by using the {} and let/const you can use patterns used in other languages like java/c++
function formatStr(str){
  {
    let prefix, rest;
    prefix = str.slice(0,3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }
  if(/^FOO:/.test(str)) return str;

  return str.slice(4);
}