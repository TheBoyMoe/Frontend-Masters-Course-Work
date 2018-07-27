// looping exercise
const game = {
  'suspects': [
    {
      name: 'Rusty',
      color: 'orange'
    },
    {
      name: 'Miss Scarlet',
      color: 'red'
    }
  ]
};

game.suspects.forEach(obj => {
  for(let prop in obj){
    console.log(obj[prop]);
  }
});

// destructure nested data structure into two variables 'red' and 'orange'
let array = [];
game.suspects.forEach(obj => {
  for(let prop in obj){
    if(prop === 'color'){
      array.push(obj[prop]);
    }
  }
});
let [a, b] = array;

// OR

let [color1, color2] = [game.suspects[0].color, game.suspects[1].color];

// OR

let [{color: firstColor}, {color: secondColor}] = game.suspects;

///////////////////////////////////
// implement .each function similar to underscore, _.each
// must work with objects and arrays
const _ = {};
_.each = function(list, callback){
  if(Array.isArray(list)){
    for(let i = 0; i < list.length; i++){
      callback(list[i], i, list);
    }
  } else {
    for(let prop in list){
      callback(list[prop], prop, list);
    }
  }
};

_.each(['Tom', 'Dick', 'Harry'], function(name, i, list){
  if(list[i + 1]){
    console.log(name, ' comes before ', list[i + 1]);
  } else {
    console.log(name, 'is last');
  }
});


////////////////////////////////////////
// implement map function
_.map = function(list, callback){
  const array = [];
  if(Array.isArray(list)){
    for(let i = 0; i <list.length; i++){
      array.push(callback(list[i], i, list));
    }
  } else {
    for(let key in list){
      array.push(callback(list[key], key, list));
    }
  }
  return array;
};

_.map(['candlestick', 'lead pipe', 'revolver'], function(weapon){
  return `broken ${weapon}`;
});