const newDevelopment = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: true},
      {'dining room': true},
      {'billiard room': false},
      {library: true}
    ]
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      {kitchen: true},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': true},
      {library: false}
    ]
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: true},
      {'dining room': false},
      {'billiard room': true},
      {library: false}
    ]
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      {kitchen: true},
      {ballroom: false},
      {conservatory: false},
      {'dining room': true},
      {'billiard room': false},
      {library: false}
    ]
  }
];

// solution
var acc = {};
for(let i = 0; i < newDevelopment.length; i++){
  let rooms = newDevelopment[i].rooms;
  rooms.forEach((item) => {
    let key = Object.keys(item)[0];
    if(item[key]){
      acc[key] = acc[key] + 1 || 1;
    }
  });
}
//=> {conservatory: 2, dining room: 2, library: 1, kitchen: 2, billiard room: 2}

const occupiedRooms = Object.keys(acc);
// => ["conservatory", "dining room", "library", "kitchen", "billiard room"] 

const allRooms = newDevelopment[0].rooms.map(item => Object.keys(item)[0]);
//=> ["kitchen", "ballroom", "conservatory", "dining room", "billiard room", "library"]

let notOccupied;
for(let i = 0; i < allRooms.length; i++){
  if(!occupiedRooms.includes(allRooms[i])) {
    notOccupied = allRooms[i];
  }
}

////////////////////////////////////////////////////////////
// adv scope and Closures
const myAlert = () => {
  const x = 'Help, I think I found a clue!';
  let count = 0;
  const alerter = () => {
    alert(`${x} ${++count}`);
  };
  return alerter;
};

const funcAlert = myAlert(); //=> count == 0
const funcAlert2 = myAlert(); //=> count == 0 - separate execution context with it's own counter
funcAlert(); //=> count == 1
funcAlert(); //=> count == 2
funcAlert(); //=> count == 3
funcAlert2(); //=> count == 1

// example 2
const newClue = (name) => {
  const length = name.length;
  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 2);
  };
};


// example 3
const findSomeone = () => {
  const speak = () => {
    console.log(who);
  };
  let who = 'Why hello there Prof.Plum';
  return speak;
};

const someoneSpeak = findSomeone();
someoneSpeak(); //=> 'Why hello there Prof.Plum'

// example 4
const makeTimer = () => {
  let elapsed = 0;
  const stopwatch = () => elapsed;
  const increment = () => elapsed++;
  setInterval(increment, 1000);
  return stopwatch;
};

let timer = makeTimer();
timer();