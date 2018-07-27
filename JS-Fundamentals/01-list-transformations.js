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

/////////////////////////////////////////
// Alternate _.map implementation
_.map = function(list, callback){
  const array = [];
  _.each(list, function(item, i, list){
    array.push(callback(item, i, list));
  });
  return array;
};

//////////////////////////////////////////
// USING _.map and _.each
// return array of suspect objects
const createSuspectObjects = (name) => {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log(`My name is ${this.name}`);
    }
  };
};

const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Miss White'];
const suspectList = _.map(suspects, function(name){
  return createSuspectObjects(name);
});

_.each(suspectList, function(suspect){
  suspect.speak();
});

//////////////////////////////////////////////////
// FILTER implementation
const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Mrs. White',
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Rusty',
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  }
];

_.filter = function(list, callback){
  const array = [];
  _.each(list, function(item, i, list){
    // WILL NOT WORK, ADDS undefined values to array where the cb returns false
    array.push(callback(item, i, list)); 
  });
  return array;
};


// 1st implementation - correct solution
_.filter = function(arr, cb){
  const array = [];
  if(Array.isArray(arr)){
    for(let i = 0; i < arr.length; i++){
      if(cb(arr[i], i, arr)) {
        array.push(arr[i]);
      }
    }
  } else {
    for(let key in arr){
      if(cb(arr[key], i, arr)){
        array.push(arr[key]); 
      }
    }
  }
  return array;
};

// 2nd implementation using _.each(can handle arrays and obj)
_.filter = function(arr, cb){
  const array = [];
  _.each(arr, function(val, i, list){
    if(cb(val, i, list)) array.push(val);
  });
  return array;
};

// the cb just needs to return a boolean
const  presentSuspects = _.filter(videoData, function(item){
  return item.present;
});

/// Exercise - return string array of the present suspects
_.map(presentSuspects, function(item){
  return item.name;
});