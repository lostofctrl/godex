/*
  pokemon.js
  godex - list of pokemon
*/

// merge with godex if exists
var godex = godex ? godex : {};

godex.pokemon = {
  "bulbasaur": {
    name: "Bulbasaur",
    type: ["grass", "poison"],
    evolveTo: "ivysaur"
  },
  "ivysaur": {
    name: "Ivysaur",
    type: ["grass", "poison"],
    evolveFrom: "bulbasaur",
    evolveTo: "venusaur"
  },
  "venusaur": {
    name: "Venusaur",
    type: ["grass", "poison"],
    evolveFrom: "ivysaur"
  },
  "charmander": {
    name: "Charmander",
    type: ["fire"],
    evolveTo: "charmeleon"
  },
  "charmeleon": {
    name: "Charmeleon",
    type: ["fire"],
    evolveFrom: "charmander",
    evolveTo: "charizard"
  },
  "charizard": {
    name: "Charizard",
    type: ["fire", "flying"],
    evolveFrom: "charmeleon"
  },
  "squirtle": {
    name: "Squirtle",
    type: ["water"],
    evolveTo: "wartortle"
  },
  "wartortle": {
    name: "Wartortle",
    type: ["water"],
    evolveFrom: "squirtle",
    evolveTo: "blastoise"
  },
  "blastoise": {
    name: "Blastoise",
    type: ["water"],
    evolveFrom: "wartortle"
  },
  "caterpie": {
    name: "Caterpie",
    type: ["bug"],
    evolveTo: "metapod"
  },
  "metapod": {
    name: "Metapod",
    type: ["bug"],
    evolveFrom: "caterpie",
    evolveTo: "butterfree"
  },
  "butterfree": {
    name: "Butterfree",
    type: ["bug", "flying"],
    evolveFrom: "metapod"
  },
  "weedle": {
    name: "Weedle",
    type: ["bug", "poison"],
    evolveTo: "kakuna"
  },
  "kakuna": {
    name: "Kakuna",
    type: ["bug", "poison"],
    evolveFrom: "weedle",
    evolveTo: "beedrill"
  },
  "beedrill": {
    name: "Beedrill",
    type: ["bug", "poison"],
    evolveFrom: "kakuna"
  },
  "pidgey": {
    name: "Pidgey",
    type: ["normal", "flying"],
    evolveTo: "pidgeotto"
  },
  "pidgeotto": {
    name: "Pidgeotto",
    type: ["normal", "flying"],
    evolveFrom: "pidgeot",
    evolveTo: "pidgeot"
  },
  "pidgeot": {
    name: "Pidgeot",
    type: ["normal", "flying"],
    evolveFrom: "pidgeotto"
  },
  "rattata": {
    name: "Rattata",
    type: ["normal"],
    evolveTo: "raticate"
  },
  "raticate": {
    name: "Raticate",
    type: ["normal"],
    evolveFrom: "rattata"
  },
  "spearow": {
    name: "Spearow",
    type: ["normal", "flying"],
    evolveTo: "Fearow"
  },
  "fearow": {
    name: "Fearow",
    type: ["normal", "flying"],
    evolveFrom: "spearow"
  },
  "ekans": {
    name: "Ekans",
    type: ["poison"],
    evolveTo: "arbok"
  },
  "arbok": {
    name: "Arbok",
    type: ["poison"],
    evolveFrom: "ekans"
  },
  "pikachu": {
    name: "Pikachu",
    type: ["electric"],
    evolveTo: "raichu"
  },
  "raichu": {
    name: "Raichu",
    type: ["electric"],
    evolveFrom: "pikachu"
  },
  "sandshrew": {
    name: "Sandshrew",
    type: ["ground"],
    evolveTo: "Sandslash"
  },
  "sandslash": {
    name: "Sandslash",
    type: ["ground"],
    evolveFrom: "sandshrew"
  },
  "nidoran-f": {
    name: "Nidoran ♀",
    type: ["poison"],
    evolveTo: "nidorina"
  },
  "nidorina": {
    name: "Nidorina",
    type: ["poison"],
    evolveFrom: "nidoran-f",
    evolveTo: "nidoqueen"
  },
  "nidoqueen": {
    name: "Nidoqueen",
    type: ["poison", "ground"],
    evolveFrom: "nidorina"
  },
  "nidoran-m": {
    name: "Nidoran ♂",
    type: ["poison"],
    evolveTo: "nidorino"
  },
  "nidorino": {
    name: "Nidorino",
    type: ["poison"],
    evolveFrom: "nidoran-m",
    evolveTo: "nidoking"
  },
  "nidoking": {
    name: "Nidoking",
    type: ["poison", "ground"],
    evolveFrom: "nidorino"
  },
  "clefairy": {
    name: "Clefairy",
    type: ["fairy"],
    evolveTo: "clefable"
  },
  "clefable": {
    name: "Clefable",
    type: ["fairy"],
    evolveFrom: "clefairy"
  },
  "vulpix": {
    name: "Vulpix",
    type: ["fire"],
    evolveTo: "ninetales"
  },
  "ninetales": {
    name: "Ninetales",
    type: ["fire"],
    evolveFrom: "vulpix"
  },
  "jigglypuff": {
    name: "Jigglypuff",
    type: ["normal", "fairy"],
    evolveTo: "wigglytuff"
  },
  "wigglytuff": {
    name: "Wigglytuff",
    type: ["normal", "fairy"],
    evolveFrom: "jigglypuff"
  },
  "zubat": {
    name: "Zubat",
    type: ["poison", "flying"],
    evolveTo: "golbat"
  },
  "golbat": {
    name: "Golbat",
    type: ["poison", "flying"],
    evolveFrom: "Zubat"
  },
  "oddish": {
    name: "Oddish",
    type: ["poison", "grass"],
    evolveTo: "gloom"
  },
  "gloom": {
    name: "Gloom",
    type: ["poison", "grass"],
    evolveFrom: "oddish",
    evolveTo: "vileplume"
  },
  "vileplume": {
    name: "Vileplume",
    type: ["poison", "grass"],
    evolveFrom: "gloom"
  },
  "paras": {
    name: "Paras",
    type: ["bug", "grass"],
    evolveTo: "parasect"
  },
  "parasect": {
    name: "Parasect",
    type: ["bug", "grass"],
    evolveFrom: "paras"
  },
  "venonat": {
    name: "Venonat",
    type: ["bug", "poison"],
    evolveTo: "venomoth"
  },
  "venomoth": {
    name: "Venomoth",
    type: ["bug", "poison"],
    evolveFrom: "venonat"
  },
  "diglett": {
    name: "Diglett",
    type: ["ground"],
    evolveTo: "dugtrio"
  },
  "dugtrio": {
    name: "Dugtrio",
    type: ["ground"],
    evolveFrom: "diglett"
  },
  "meowth": {
    name: "Meowth",
    type: ["normal"],
    evolveTo: "persian"
  },
  "persian": {
    name: "Persian",
    type: ["normal"],
    evolveFrom: "meowth"
  },
  "psyduck": {
    name: "Psyduck",
    type: ["water"],
    evolveTo: "golduck"
  },
  "golduck": {
    name: "Golduck",
    type: ["water"],
    evolveFrom: "psyduck"
  },
  "mankey": {
    name: "Mankey",
    type: ["fighting"],
    evolveTo: "primeape"
  },
  "primeape": {
    name: "Primeape",
    type: ["fighting"],
    evolveFrom: "mankey"
  },
  "growlithe": {
    name: "Growlithe",
    type: ["fire"],
    evolveTo: "arcanine"
  },
  "arcanine": {
    name: "Arcanine",
    type: ["fire"],
    evolveFrom: "growlithe"
  },
  "poliwag": {
    name: "Poliwag",
    type: ["water"],
    evolveTo: "poliwhirl"
  },
  "poliwhirl": {
    name: "Poliwhirl",
    type: ["water"],
    evolveFrom: "poliwag",
    evolveTo: "poliwrath"
  },
  "poliwrath": {
    name: "Poliwrath",
    type: ["water", "fighting"],
    evolveFrom: "poliwhirl"
  },
  "abra": {
    name: "Abra",
    type: ["psychic"],
    evolveTo: "kadabra"
  },
  "kadabra": {
    name: "Kadabra",
    type: ["psychic"],
    evolveFrom: "abra",
    evolveTo: "alakazam"
  },
  "alakazam": {
    name: "Alakazam",
    type: ["psychic"],
    evolveFrom: "kadabra"
  },
  "machop": {
    name: "Machop",
    type: ["fighting"],
    evolveTo: "machoke"
  },
  "machoke": {
    name: "Machoke",
    type: ["fighting"],
    evolveFrom: "machop",
    evolveTo: "machamp"
  },
  "machamp": {
    name: "Machamp",
    type: ["fighting"],
    evolveFrom: "machoke"
  },
  "bellsprout": {
    name: "Bellsprout",
    type: ["grass", "poison"],
    evolveTo: "weepinbell"
  },
  "weepinbell": {
    name: "Weepinbell",
    type: ["grass", "poison"],
    evolveFrom: "bellsprout",
    evolveTo: "victreebel"
  },
  "victreebel": {
    name: "Victreebel",
    type: ["grass", "poison"],
    evolveFrom: "weepinbell"
  },
  "tentacool": {
    name: "Tentacool",
    type: ["water", "poison"],
    evolveTo: "tentacruel"
  },
  "tentacruel": {
    name: "Tentacruel",
    type: ["water", "poison"],
    evolveFrom: "tentacool"
  },
  "geodude": {
    name: "Geodude",
    type: ["rock", "ground"],
    evolveTo: "graveler"
  },
  "graveler": {
    name: "Graveler",
    type: ["rock", "ground"],
    evolveFrom: "geodude",
    evolveTo: "golem"
  },
  "golem": {
    name: "Golem",
    type: ["rock", "ground"],
    evolveFrom: "graveler"
  },
  "ponyta": {
    name: "Ponyta",
    type: ["fire"],
    evolveTo: "rapidash"
  },
  "rapidash": {
    name: "Rapidash",
    type: ["fire"],
    evolveFrom: "ponyta"
  },
  "slowpoke": {
    name: "Slowpoke",
    type: ["water", "psychic"],
    evolveTo: "slowbro"
  },
  "slowbro": {
    name: "Slowbro",
    type: ["water", "psychic"],
    evolveFrom: "slowpoke"
  },
  "magneton": {
    name: "Magneton",
    type: ["electric", "steel"],
    evolveTo: "magnemite"
  },
  "magnemite": {
    name: "Magnemite",
    type: ["electric", "steel"],
    evolveFrom: "magneton"
  },
  "farfetchd": {
    name: "Farfetch'd",
    type: ["normal", "flying"]
  },
  "doduo": {
    name: "Doduo",
    type: ["normal", "flying"],
    evolveTo: "dodrio"
  },
  "dodrio": {
    name: "Dodrio",
    type: ["normal", "flying"],
    evolveFrom: "doduo"
  },
  "seel": {
    name: "Seel",
    type: ["water"],
    evolveTo: "dewgong"
  },
  "dewgong": {
    name: "Dewgong",
    type: ["water", "ice"],
    evolveFrom: "seel"
  },
  "grimer": {
    name: "Grimer",
    type: ["poison"],
    evolveTo: "muk"
  },
  "muk": {
    name: "Muk",
    type: ["poison"],
    evolveFrom: "grimer"
  },
  "shellder": {
    name: "Shellder",
    type: ["water"],
    evolveTo: "cloyster"
  },
  "cloyster": {
    name: "Cloyster",
    type: ["water", "ice"],
    evolveFrom: "shellder"
  },
  "gastly": {
    name: "Gastly",
    type: ["ghost", "poison"],
    evolveTo: "haunter"
  },
  "haunter": {
    name: "Haunter",
    type: ["ghost", "poison"],
    evolveFrom: "gastly",
    evolveTo: "gengar"
  },
  "gengar": {
    name: "Gengar",
    type: ["ghost", "poison"],
    evolveFrom: "haunter"
  },
  "onix": {
    name: "Onix",
    type: ["rock", "ground"]
  },
  "drowzee": {
    name: "Drowzee",
    type: ["psychic"],
    evolveTo: "hypno"
  },
  "hypno": {
    name: "Hypno",
    type: ["psychic"],
    evolveFrom: "drowzee"
  },
  "krabby": {
    name: "Krabby",
    type: ["water"],
    evolveTo: "kingler"
  },
  "kingler": {
    name: "Kingler",
    type: ["water"],
    evolveFrom: "krabby"
  },
  "voltorb": {
    name: "Voltorb",
    type: ["electric"],
    evolveTo: "electrode"
  },
  "electrode": {
    name: "Electrode",
    type: ["electric"],
    evolveFrom: "voltorb"
  },
  "exeggcute": {
    name: "Exeggcute",
    type: ["grass", "psychic"],
    evolveTo: "exeggutor"
  },
  "exeggutor": {
    name: "Exeggutor",
    type: ["grass", "psychic"],
    evolveFrom: "exeggcute"
  },
  "cubone": {
    name: "Cubone",
    type: ["ground"],
    evolveTo: "marowak"
  },
  "marowak": {
    name: "Marowak",
    type: ["ground"],
    evolveFrom: "cubone"
  },
  "hitmonlee": {
    name: "Hitmonlee",
    type: ["fighting"]
  },
  "hitmonchan": {
    name: "Hitmonchan",
    type: ["fighting"]
  },
  "lickitung": {
    name: "Lickitung",
    type: ["normal"]
  },
  "koffing": {
    name: "Koffing",
    type: ["poison"],
    evolveTo: "weezing"
  },
  "weezing": {
    name: "Weezing",
    type: ["poison"],
    evolveFrom: "koffing"
  },
  "rhyhorn": {
    name: "Rhyhorn",
    type: ["ground", "rock"],
    evolveTo: "rhydon"
  },
  "rhydon": {
    name: "Rhydon",
    type: ["ground", "rock"],
    evolveFrom: "rhyhorn"
  },
  "chansey": {
    name: "Chansey",
    type: ["normal"]
  },
  "tangela": {
    name: "Tangela",
    type: ["grass"]
  },
  "kangaskhan": {
    name: "Kangaskhan",
    type: ["normal"]
  },
  "horsea": {
    name: "Horsea",
    type: ["water"],
    evolveTo: "seadra"
  },
  "seadra": {
    name: "Seadra",
    type: ["water"],
    evolveFrom: "horsea"
  },
  "goldeen": {
    name: "Goldeen",
    type: ["water"],
    evolveTo: "seaking"
  },
  "seaking": {
    name: "Seaking",
    type: ["water"],
    evolveFrom: 'goldeen'
  },
  "staryu": {
    name: "Staryu",
    type: ["water"],
    evolveTo: "starmie"
  },
  "starmie": {
    name: "Starmie",
    type: ["water", "psychic"],
    evolveFrom: "staryu"
  },
  "mr-mime": {
    name: "Mr. Mime",
    type: ["psychic", "fairy"]
  },
  "scyther": {
    name: "Scyther",
    type: ["bug", "flying"]
  },
  "jynx": {
    name: "Jynx",
    type: ["ice", "psychic"]
  },
  "electabuzz": {
    name: "Electabuzz",
    type: ["electric"]
  },
  "magmar": {
    name: "Magmar",
    type: ["fire"]
  },
  "pinsir": {
    name: "Pinsir",
    type: ["bug"]
  },
  "tauros": {
    name: "Tauros",
    type: ["normal"]
  },
  "magikarp": {
    name: "Magikarp",
    type: ["water"],
    evolveTo: "gyarados"
  },
  "gyarados": {
    name: "Gyarados",
    type: ["water", "flying"],
    evolveFrom: "magikarp"
  },
  "lapras": {
    name: "Lapras",
    type: ["water", "ice"]
  },
  "ditto": {
    name: "Ditto",
    type: ["normal"]
  },
  "eevee": {
    name: "Eevee",
    type: ["normal"],
    evolveTo: ["vaporeon", "jolteon", "flareon"]
  },
  "vaporeon": {
    name: "Vaporeon",
    type: ["water"],
    evolveFrom: "eevee"
  },
  "jolteon": {
    name: "Jolteon",
    type: ["electric"],
    evolveFrom: "eevee"
  },
  "flareon": {
    name: "Flareon",
    type: ["fire"],
    evolveFrom: "eevee"
  },
  "porygon": {
    name: "Porygon",
    type: ["normal"]
  },
  "omanyte": {
    name: "Omanyte",
    type: ["rock", "water"],
    evolveTo: "omastar"
  },
  "omastar": {
    name: "Omastar",
    type: ["rock", "water"],
    evolveFrom: "omanyte"
  },
  "kabuto": {
    name: "Kabuto",
    type: ["rock", "water"],
    evolveTo: "kabutops"
  },
  "kabutops": {
    name: "Kabutops",
    type: ["rock", "water"],
    evolveFrom: "kabuto"
  },
  "aerodactyl": {
    name: "Aerodactyl",
    type: ["rock", "flying"]
  },
  "snorlax": {
    name: "Snorlax",
    type: ["normal"]
  },
  "articuno": {
    name: "Articuno",
    type: ["ice", "flying"]
  },
  "zapdos": {
    name: "Zapdos",
    type: ["electric", "flying"]
  },
  "moltres": {
    name: "Moltres",
    type: ["fire", "flying"]
  },
  "dratini": {
    name: "Dratini",
    type: ["dragon"],
    evolveTo: "dragonair"
  },
  "dragonair": {
    name: "Dragonair",
    type: ["dragon"],
    evolveFrom: "dratini",
    evolveTo: "dragonite"
  },
  "dragonite": {
    name: "Dragonite",
    type: ["dragon", "flying"],
    evolveFrom: "dragonair"
  },
  "mewtwo": {
    name: "Mewtwo",
    type: ["psychic"]
  },
  "mew": {
    name: "Mew",
    type: ["psychic"]
  }
};

/*
  types.js
  godex - list of pokemon types
*/

// merge with godex if exists
var godex = godex ? godex : {};

godex.types = {
  "bug": {
    name: "Bug",
    twiceTo: ["psychic", "grass", "dark"],
    halfFrom: ["fighting", "grass", "ground"],
    halfTo: ["fighting", "fire", "flying", "ghost", "poison", "steel", "fairy"],
    twiceFrom: ["fire", "flying", "rock"],
  },
  "dark": {
    name: "Dark",
    twiceTo: ["ghost", "psychic"],
    halfFrom: ["dark", "ghost"],
    halfTo: ["dark", "fighting", "fairy"],
    twiceFrom: ["bug", "fighting", "fairy"],
  },
  "dragon": {
    name: "Dragon",
    twiceTo: ["dragon"],
    halfFrom: ["electric", "fire", "grass", "water"],
    halfTo: ["steel"],
    twiceFrom: ["dragon", "ice", "fairy"],
  },
  "electric": {
    name: "Electric",
    twiceTo: ["flying", "water"],
    halfFrom: ["electric", "flying", "steel"],
    halfTo: ["dragon", "electric", "grass"],
    twiceFrom: ["ground"],
  },
  "fairy": {
    name: "Fairy",
    twiceTo: ["dark", "dragon", "fighting"],
    halfFrom: ["bug", "dark", "fighting"],
    halfTo: ["fire", "poison", "steel"],
    twiceFrom: ["poison", "steel"],
  },
  "fighting": {
    name: "Fighting",
    twiceTo: ["dark", "ice", "normal", "rock", "steel"],
    halfFrom: ["bug", "dark", "rock"],
    halfTo: ["bug", "fairy", "flying", "poison", "psychic"],
    twiceFrom: ["fairy", "flying", "psychic"],
  },
  "fire": {
    name: "Fire",
    twiceTo: ["bug", "grass", "ice", "steel"],
    halfFrom: ["bug", "fairy", "fire", "grass", "ice", "steel"],
    halfTo: ["dragon", "fire", "rock", "water"],
    twiceFrom: ["ground", "rock", "water"],
  },
  "flying": {
    name: "Flying",
    twiceTo: ["bug", "fighting", "grass"],
    halfFrom: ["bug", "fighting", "grass"],
    halfTo: ["electric", "rock", "steel"],
    twiceFrom: ["electric", "ice", "rock"],
  },
  "ghost": {
    name: "Ghost",
    twiceTo: ["ghost", "psychic"],
    halfFrom: ["bug", "poison"],
    halfTo: ["dark"],
    twiceFrom: ["ghost", "dark"],
  },
  "grass": {
    name: "Grass",
    twiceTo: ["ground", "rock", "water"],
    halfFrom: ["electric", "grass", "ground", "water"],
    halfTo: ["bug", "dragon", "fire", "flying", "grass", "poison", "steel"],
    twiceFrom: ["bug", "fire", "flying", "ice", "poison"],
  },
  "ground": {
    name: "Ground",
    twiceTo: ["electric", "fire", "poison", "rock", "steel"],
    halfFrom: ["poison", "rock"],
    halfTo: ["bug", "grass"],
    twiceFrom: ["grass", "ice", "water"],
  },
  "ice": {
    name: "Ice",
    twiceTo: ["dragon", "flying", "grass", "ground"],
    halfFrom: ["ice"],
    halfTo: ["fire", "ice", "steel", "water"],
    twiceFrom: ["fighting", "fire", "rock", "steel"],
  },
  "normal": {
    name: "Normal",
    twiceTo: [],
    halfFrom: [],
    halfTo: ["rock", "steel"],
    twiceFrom: ["fighting"],
  },
  "poison": {
    name: "Poison",
    twiceTo: ["grass", "fairy"],
    halfFrom: ["bug", "fairy", "fighting", "grass", "poison"],
    halfTo: ["ghost", "ground", "poison", "rock"],
    twiceFrom: ["ground", "psychic"],
  },
  "psychic": {
    name: "Psychic",
    twiceTo: ["fighting", "poison"],
    halfFrom: ["fighting", "psychic"],
    halfTo: ["psychic", "steel"],
    twiceFrom: ["bug", "dark", "ghost"],
  },
  "rock": {
    name: "Rock",
    twiceTo: ["bug", "fire", "flying", "ice"],
    halfFrom: ["fire", "flying", "normal", "poison"],
    halfTo: ["fighting", "ground", "steel"],
    twiceFrom: ["fighting", "grass", "ground", "steel", "water"],
  },
  "steel": {
    name: "Steel",
    twiceTo: ["fairy", "ice", "rock"],
    halfFrom: ["bug", "dragon", "fairy", "flying", "grass", "ice", "normal", "psychic", "rock", "steel"],
    halfTo: ["electric", "fire", "steel", "water"],
    twiceFrom: ["fighting", "fire", "ground"],
  },
  "water": {
    name: "Water",
    twiceTo: ["fire", "ground", "rock"],
    halfFrom: ["fire", "ice", "steel", "water"],
    halfTo: ["dragon", "grass", "water"],
    twiceFrom: ["electric", "grass"],
  }
};

/*
  godex.js
  a javascript library for pokemon go
*/

var dex = (function() {
  // simple function to clean keys
  var key = function(string) {
    return string
      .replace(".", "")
      .replace(" ", "-")
      .replace("'", "")
      .toLowerCase();
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
            else pokemon[key][target] *= 0.8;
            // but if a score is assigned, multiply it.
          } else {
            if (!score) pokemon[key][target] = 1.25;
            else pokemon[key][target] *= 1.25;
          }
        }
      }
    }

    return pokemon;
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
    if (godex.types[search]) {
      result = godex.types[search];
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
      for (var t in types) {
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
        var score = offense[type] / this.count;
        score = Math.round(score * 100) / 100;
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
        var score = defense[type] / this.count;
        score = Math.round(score * 100) / 100;
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

  // return the Library
  return {
    get: get,
    getType: getType,
    list: list,
    byType: byType,
    gym: gym,
    aZ: [ "A","B","C","D","E","F","G","H","I","J","K",
        "L","M","N","O","P","R","S","T","V","W","Z" ]
  };
})();
