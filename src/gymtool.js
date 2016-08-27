/*
  gymtool.js
  Allow for a collection of pokemon to review
*/

var gymtool = function() {
  this.list = {};
  this.count = 0;
};



// Prototype for above collection
gymtool.prototype = {
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
