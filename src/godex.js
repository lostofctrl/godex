/*
  godex.js
  a javascript library for pokemon go
*/

// Define Godex [Data]
var godex = {
  pokemon: pokemon,
  types: types,
  levels: levels,
  moves: {
    quick: movesQuick,
    charge: movesCharge
  }
};

// Build and Return Library
(function(godex) {
  // simple function to clean keys
  var key = function(string) {
      return string
        .replace(".", "")
        .replace(" ", "-")
        .replace("'", "")
        .toLowerCase();
    },
    rnd = function(num) {
      return Math.round(num * 100) / 100;
    };

  // Add extra data to a pokemon
  var buildPokemon = function(pokemon) {
    pokemon.count = 1; // for gyms
    pokemon.offense = {};
    pokemon.defense = {};

    var toLoop = {
      // this is just me being lazy
      // and coding an array to loop through
      // rather than sort through all of
      // these with individual loops, add them
      // all to an object and then just loop that
      "halfTo": "offense",
      "halfFrom": "defense",
      "twiceTo": "offense",
      "twiceFrom": "defense"
    };

    // for each type the pokemon is
    for (var _type in pokemon.type) {
      var x, type = godex.types[pokemon.type[_type]];

      // now we loop through that loop up there
      for (x in toLoop) {
        for (var i = 0;i < type[x].length;i++) {
          var key = toLoop[x],
            target = type[x][i],
            score = pokemon[key][target];
          if (x.indexOf("half") > -1) {
            // if a score isn't assigned, we assign it the score
            if (!score) pokemon[key][target] = 0.8;
            else pokemon[key][target] = rnd(pokemon[key][target] * 0.8);
            // but if a score is assigned, multiply it.
          } else {
            if (!score) pokemon[key][target] = 1.25;
            else pokemon[key][target] = rnd(pokemon[key][target] * 1.25);
          }
        }
      }
    }

    return pokemon;
  };

  // Add extra data to a move
  var buildMove = function(move) {
    move.offenseDPS = rnd(move.attack / move.cooldown);
    if (!move.charges) {
      move.defenseDPS = rnd(move.attack / (move.cooldown + 2));
    }
    return move;
  };

  // Fetch a pokemon
  var get = function(search) {
    var result = false;
    if (godex.pokemon[key(search)]) {
      // try finding by key
      result = godex.pokemon[key(search)];
    } else {
      // or just by name
      for (var x in godex.pokemon) {
        if (godex.pokemon[x].name.toLowerCase() == search.toLowerCase()) {
          result = godex.pokemon[x];
        }
      }
    }
    if (result) result = buildPokemon(result);
    return result;
  };

  // Fetch a type
  var getType = function(search) {
    var result = false;
    if (godex.types[key(search)]) {
      result = godex.types[key(search)];
    }
    return result;
  };

  // Fetch a move
  var getMove = function(search) {
    var result = false;
    if (godex.moves.quick[key(search)]) {
      result = godex.moves.quick[key(search)];
    }
    if (godex.moves.charge[key(search)]) {
      result = godex.moves.charge[key(search)];
    }
    if (result) result = buildMove(result);
    return result;
  };

  // Get Pokemon by type
  var byType = function(search) {
    var result = [];
    for (var x in godex.pokemon) {
      var poke = godex.pokemon[x];
      if (poke.type.indexOf(key(search)) > -1) {
        result.push({
          key: x,
          name: poke.name
        });
      }
    }
    return result;
  };

  // Get a list of pokemon
  var list = function(alpha) {
    var result = [];
    for (var x in godex.pokemon) {
      result.push({
        key: x,
        name: godex.pokemon[x].name
      });
    }
    if (alpha) {
      result.sort(function(a,b) {
        return a.name - b.name;
      });
    }
    return result;
  };

  // Get a list of types
  var listTypes = function(alpha) {
    var result = [];
    for (var x in godex.types) {
      result.push({
        key: x,
        name: godex.types[x].name
      });
    }
    if (alpha) {
      result.sort(function(a,b) {
        return a.name - b.name;
      });
    }
    return result;
  };

  // Get a list of moves
  var listMoves = function(alpha) {
    var x, result = [];
    for (x in godex.moves.quick) {
      result.push({
        key: x,
        type: 'quick',
        name: godex.moves.quick[x].name
      });
    }
    for (x in godex.moves.charge) {
      result.push({
        key: x,
        type: 'charge',
        name: godex.moves.charge[x].name
      });
    }
    if (alpha) {
      result.sort(function(a,b) {
        return a.name - b.name;
      });
    }
    return result;
  };

  // Allow for a collection
  // of pokemon, a "Gym"
  var gym = function() {
    this.list = {};
    this.count = 0;
  };

  // Prototype for above collection
  gym.prototype = {
    // Add a pokemon to gym
    add: function(search) {
      var existing = this.list[key(search)];
      if (existing) {
        this.count += 1;
        existing.count += 1;
      } else {
        var pokemon = get(search);
        if (pokemon) {
          this.list[key(search)] = pokemon;
          this.count += 1;
        }
      }
    },

    // Remove a pokemon from gym
    remove: function(search) {
      var existing = this.list[key(search)];
      if (existing) {
        if (existing.count > 1) {
          // if more than 1, just remove 1
          existing.count -= 1;
        } else {
          delete this.list[key(search)];
        }
        this.count -= 1;
      }
    },

    // Get the types in the gym
    types: function() {
      var x, result = [], types = {};
      for (x in this.list) {
        var pokemon = this.list[x];
        for (var i = 0;i < pokemon.type.length;i++) {
          // put it all in an object so we don't have multiples
          var type = pokemon.type[i];
          if (!types[type]) types[type] = pokemon.count;
          else types[type] += pokemon.count;
        }
      }
      // convert object to array
      for (x in types) {
        result.push({
          name: x,
          num: types[x]
        });
      }
      return result;
    },

    // Get types not in the gym
    unmodified: function() {
      var result = [];
      for (var t in godex.types) {
        result.push(t);
      }
      // Build an array of ALL THE TYPES
      // and then pull the types that are in the gym out of it!
      for (var p in this.list) {
        var pokemon = this.list[p];
        for (var o in pokemon.offense) {
          var _o = result.indexOf(o); // index of o
          if (_o > -1) result.splice(_o, 1); // remove if exists
        }
        for (var d in pokemon.defense) {
          var _d = result.indexOf(d); // index of d
          if (_d > -1) result.splice(_d, 1); // remove if exists
        }
      }
      return result;
    },

    // Combined offense of gym
    offense: function(sort) {
      var offense = {}, result = [];
      for (var poke in this.list) {
        var mon = this.list[poke];
        for (var i = 0;i < mon.count;i++) {
          for (var t in mon.offense) {
            if (!offense[t]) offense[t] = this.count;
            offense[t] += (mon.offense[t] - 1);
          }
        }
      }
      for (var type in offense) {
        var score = rnd(offense[type] / this.count);
        result.push({
          name: type,
          score: score
        });
      }
      if (sort) {
        result.sort(function(a,b) {
          return a.score - b.score;
        });
      } else {
        result.sort(function(a,b) {
          return b.score - a.score;
        });
      }
      return result;
    },

    // Combined offense of gym
    defense: function(sort) {
      var defense = {}, result = [];
      for (var poke in this.list) {
        var mon = this.list[poke];
        for (var i = 0;i < mon.count;i++) {
          for (var t in mon.defense) {
            if (!defense[t]) defense[t] = this.count;
            defense[t] += (mon.defense[t] - 1);
          }
        }
      }
      for (var type in defense) {
        var score = rnd(defense[type] / this.count);
        result.push({
          name: type,
          score: score
        });
      }
      if (sort) {
        result.sort(function(a,b) {
          return b.score - a.score;
        });
      } else {
        result.sort(function(a,b) {
          return a.score - b.score;
        });
      }
      return result;
    }
  };

  // define the Library
  var dex = {
    get: get,
    getType: getType,
    getMove: getMove,
    byType: byType,
    list: list,
    listTypes: listTypes,
    listMoves: listMoves,
    gym: gym,
    aZ: [ "A","B","C","D","E","F","G","H","I","J","K",
        "L","M","N","O","P","R","S","T","V","W","Z" ]
  };

  // Export to node or the browser, whichever is being used!
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = dex;
  else
    window.dex = dex;
})(godex || {});
