// _.each declaration
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

// _.map declaration
_.map = function(list, callback){
  const array = [];
  _.each(list, function(item, i, list){
    array.push(callback(item, i, list));
  });
  return array;
};

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