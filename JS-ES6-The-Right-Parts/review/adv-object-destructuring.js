var defaults = {
  method: 'POST',
  callback: Function.prototype,
  headers: {
    "Content-Type": "text/plain"
  }
}

var foo = function(){}

var config = {
  url: "http://some.url.com",
  callback: foo,
  headers: {
    "x-requested-with": "foo"
  }
}

var result = {
  ...defaults,
  ...config
}

console.log(result)

/*
{ method: 'POST',
  callback: [Function: foo],
  headers: { 'x-requested-with': 'foo' },
  url: 'http://some.url.com' }
  */
