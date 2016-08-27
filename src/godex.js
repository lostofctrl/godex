/*
  godex.js
  a javascript library for pokemon go
*/

// Define Godex [Data]
var godex = {
  pokemon: pokemon,
  types: types,
  levels: levels,
  moves: moves,
  appraise: appraise,
  gymtool: gymtool
};

// Build and Return Library
(function(godex) {
  // simple function to clean keys
  var key = function(string) {
      if (typeof string !== "string") return string;
      else return string
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

  // Fetch data
  var get = function() {
    var args = arguments;
    if (!args.length) return { method: "get", err: "No arguments passed." };

    var result = false, search, subtype = false,
      target = args.length == 2 ? args[1] : args[0],
      location = args.length == 2 ? args[0].toLowerCase() : "pokemon";

    // Subproperty Location?
    if (location.indexOf(".") > -1) {
      subtype = location.split(".")[1];
      location = location.split(".")[0];
      search = godex[location];
    } else {
      if (location == "type") location = "types";
      if (location == "move") location = "moves";
      search = godex[location];
    }

    if (!search) return { method: "get", err: "Couldn't find: " + location };

    // If subproperty, get it!
    if (subtype) {
      result = [];
      for (var subtypes in search) {
        var fetch = search[subtypes],
          _data = fetch[subtype];
        fetch.key = subtypes;
        if (!_data) {
          return { method: "get", err: "Couldn't find subtype: " + subtype };
        }
        if (Array.isArray(_data)) {
          if (_data.indexOf(target.toLowerCase()) > -1) result.push(fetch);
        } else if (isNaN(_data)) {
          if (_data.toLowerCase() == target.toLowerCase()) result.push(fetch);
        } else {
          if (_data == target) result.push(fetch);
        }
      }
      return result;
    }
    // Are we just fetching the data?
    if (target == "all") return search;

    // Or a list of the data?
    if (target == "list") {
      result = [];
      for (var thing in search) {
        if (search[thing].name) {
          result.push({
            key: thing,
            name: search[thing].name
          });
        } else {
          result.push({
            key: thing,
            data: search[thing]
          });
        }
      }
      return result;
    }

    // Is it as simple as a key?
    if (search[key(target)]) result = search[key(target)];

    // Well, let's look deeper
    for (var query in search) {
      // Is it a name?
      if (search[query].name == target) result = search[query];

      // Or an ID?
      if (search[query].id == parseInt(target)) result = search[query];
    }

    if (result) {
      // do some building
      if (location.indexOf("pokemon") > -1) result = buildPokemon(result);
      if (location.indexOf("move") > -1) result = buildMove(result);
    } else {
      result = { method: "get", err: "Couldn't find: " + target };
    }
    return result;
  };

  // Appraise a pokemon
  var appraise = function(options) {
    options.pokemon = get(options.pokemon);
    if (!options.pokemon) return { method: "appraise", err: "Poke Not Found" };
    if (!options.cp) return { method: "appraise", err: "CP Not Entered" };
    if (!options.hp) return { method: "appraise", err: "HP Not Entered" };
    if (!options.dust) return { method: "appraise", err: "Dust Not Entered" };

    options.levels = get("levels.dust", options.dust);
    if (!options.levels.length) return { method: "appraise", err: "Dust Invalid" };

    return godex.appraise(options);
  };

  // define the Library
  var dex = {
    get: get,
    gym: gymtool,
    appraise: appraise,
    aZ: [ "A","B","C","D","E","F","G","H","I","J","K",
        "L","M","N","O","P","R","S","T","V","W","Z" ]
  };

  // Export to node or the browser, whichever is being used!
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = dex;
  else
    window.dex = dex;
})(godex || {});
