// Implementation of reduce
const _ = {};
_.reduce = (collection, cb, initial) => {
  let acc = initial;
  // if(Array.isArray(collection)){
  for(let i = 0; i < collection.length; i++){
    acc = (i === 0 && acc === undefined)? collection[0] : cb(collection[i], acc);
  }
  // } 
  // else {
  //   let keys = Object.keys(collection);
  //   for(let key in collection){
  //     if(keys[0] === key){
  //       acc = collection[key];
  //     } else {
  //       acc = cb(collection[key], acc);
  //     }
  //   }
  // }
  return acc;
};

// test array implementation
_.reduce([1,2,3], (v, acc) => v + acc, 0);

// test implementation of obj
_.reduce({'a': 1, 'b': 2, 'c': 1}, (result, value, key) => {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});