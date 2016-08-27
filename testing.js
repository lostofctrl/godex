/*
  testing.js
  run this file to make sure it all works, I guess.
*/

var dex = require('./godex'),
  details = false; // change to true to print data

// Some Helper Functions

function note(message, data) {
  if (data && details) console.log("GoDEX:", message, data);
  else console.log("GoDEX:", message);
}

function space(num) {
  for (var x = 0; x < num;x++) {
    console.log(""); // for pretty printing in console.
  }
}

function check(thing) {
  if (Array.isArray(thing)) {
    return (thing.length > 0) ? "SUCCESS" : "ERROR!";
  } else {
    return thing ? "SUCCESS" : "ERROR!";
  }
}

// AND NOW WE TEST
space(1);
note("------------TESTING DATA------------");
space(1);

var pokemon = dex.get("pokemon", "list");
note("# OF POKEMON: " + pokemon.length, pokemon);

var types = dex.get("types", "list");
note("# OF POKEMON TYPES: " + types.length, types);

var moves = dex.get("moves", "list");
note("# OF POKEMON MOVES: " + moves.length, moves);

space(2);
note("---------VERIFYING: METHODS---------");
space(1);

var i, methodData;

note("VERIFYING: dex.get()");
for (i in pokemon) {
  methodData = dex.get(i);
}
methodData = dex.get('Bulbasaur');
note("METHOD: dex.get('Bulbasaur'): " + check(methodData), methodData);

methodData = dex.get(1);
note("METHOD: dex.get(1): " + check(methodData), methodData);

methodData = dex.get('Bulbasaur');
note("METHOD: dex.get('Bulbasaur'): " + check(methodData), methodData);

methodData = dex.get('type', 'bug');
note("METHOD: dex.get('type', 'bug'): " + check(methodData), methodData);

methodData = dex.get('move', 'Twister');
note("METHOD: dex.get('move', 'Twister'): " + check(methodData), methodData);

methodData = dex.get('pokemon.type', 'bug');
note("METHOD: dex.get('pokemon.type', 'bug'): " + check(methodData), methodData);

space(1);

note("VERIFYING: dex.appraise()");
methodData = dex.appraise({
  pokemon: 'Aerodactyl',
  cp: 1495,
  hp: 113,
  dust: 3500,
  powered: true,
  strongAtk: false,
  strongDef: true,
  strongHP: false
});
note("METHOD: dex.appraise(): " + check(methodData), methodData);

space(2);
note("---------VERIFYING: POKEMON---------");
space(1);

var vPoke = 0, uPoke = 0, // counting
  ePoke = {}; // error collection

for (var _p in pokemon) {
  var isGood = true,
    key = pokemon[_p].key,
    poke = dex.get(key);

  if (!poke) {
    if (!ePoke[key]) ePoke[key] = [];
    ePoke[key].push(key + " CRITICAL ERROR, NO DATA FOUND.");
    isGood = false;
  } else {
    // test types
    for (var _t in poke.types) {
      var type = dex.get("type", poke.types[_t]);
      if (!type) {
        if (!ePoke[key]) ePoke[key] = [];
        ePoke[key].push(poke.name + " Type Error: " + poke.types[_t]);
        isGood = false;
      }
    }
    // test moves
    for (var _q in poke.moves) {
      var quick = dex.get("move", poke.moves[_q]);
      if (!quick) {
        if (!ePoke[key]) ePoke[key] = [];
        ePoke[key].push(poke.name + " Move Error: " + poke.moves[_q]);
        isGood = false;
      }
    }
  }

  if (!isGood) {
    uPoke += 1;
  } else {
    vPoke += 1;
  }
}

note("POKEMON VERIFIED: " + vPoke + ", ERROR: " + uPoke);
if (uPoke > 1 || ePoke.length) {
  for (var mon in ePoke) {
    for (var err in ePoke[mon]) {
      note(ePoke[mon][err]);
    }
  }
}

space(2);
note("------------DONE-CHECKING-----------");
space(1);
