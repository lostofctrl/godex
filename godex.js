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

  console.log(godex, "hi");
  // return the Library
  return {
    test: function() {

    }
  };
})();
