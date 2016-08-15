/*
  pokemon.js
  godex - list of pokemon
*/

// merge with godex if exists
var godex = godex ? godex : {};

godex.pokemon = {
  "bulbasaur": {
    id: 1,
    egg: 2,
    candy: 25,
    name: "Bulbasaur",
    type: ["grass", "poison"],
    evolveTo: "ivysaur"
  },
  "ivysaur": {
    id: 2,
    egg: 0,
    candy: 100,
    name: "Ivysaur",
    type: ["grass", "poison"],
    evolveFrom: "bulbasaur",
    evolveTo: "venusaur"
  },
  "venusaur": {
    id: 3,
    egg: 0,
    candy: 0,
    name: "Venusaur",
    type: ["grass", "poison"],
    evolveFrom: "ivysaur"
  },
  "charmander": {
    id: 4,
    egg: 2,
    candy: 25,
    name: "Charmander",
    type: ["fire"],
    evolveTo: "charmeleon"
  },
  "charmeleon": {
    id: 5,
    egg: 0,
    candy: 100,
    name: "Charmeleon",
    type: ["fire"],
    evolveFrom: "charmander",
    evolveTo: "charizard"
  },
  "charizard": {
    id: 6,
    egg: 0,
    candy: 0,
    name: "Charizard",
    type: ["fire", "flying"],
    evolveFrom: "charmeleon"
  },
  "squirtle": {
    id: 7,
    egg: 2,
    candy: 25,
    name: "Squirtle",
    type: ["water"],
    evolveTo: "wartortle"
  },
  "wartortle": {
    id: 8,
    egg: 0,
    candy: 100,
    name: "Wartortle",
    type: ["water"],
    evolveFrom: "squirtle",
    evolveTo: "blastoise"
  },
  "blastoise": {
    id: 9,
    egg: 0,
    candy: 0,
    name: "Blastoise",
    type: ["water"],
    evolveFrom: "wartortle"
  },
  "caterpie": {
    id: 10,
    egg: 2,
    candy: 12,
    name: "Caterpie",
    type: ["bug"],
    evolveTo: "metapod"
  },
  "metapod": {
    id: 11,
    egg: 0,
    candy: 50,
    name: "Metapod",
    type: ["bug"],
    evolveFrom: "caterpie",
    evolveTo: "butterfree"
  },
  "butterfree": {
    id: 12,
    egg: 0,
    candy: 0,
    name: "Butterfree",
    type: ["bug", "flying"],
    evolveFrom: "metapod"
  },
  "weedle": {
    id: 13,
    egg: 2,
    candy: 12,
    name: "Weedle",
    type: ["bug", "poison"],
    evolveTo: "kakuna"
  },
  "kakuna": {
    id: 14,
    egg: 0,
    candy: 50,
    name: "Kakuna",
    type: ["bug", "poison"],
    evolveFrom: "weedle",
    evolveTo: "beedrill"
  },
  "beedrill": {
    id: 15,
    egg: 0,
    candy: 0,
    name: "Beedrill",
    type: ["bug", "poison"],
    evolveFrom: "kakuna"
  },
  "pidgey": {
    id: 16,
    egg: 2,
    candy: 12,
    name: "Pidgey",
    type: ["normal", "flying"],
    evolveTo: "pidgeotto"
  },
  "pidgeotto": {
    id: 17,
    egg: 0,
    candy: 50,
    name: "Pidgeotto",
    type: ["normal", "flying"],
    evolveFrom: "pidgeot",
    evolveTo: "pidgeot"
  },
  "pidgeot": {
    id: 18,
    egg: 0,
    candy: 0,
    name: "Pidgeot",
    type: ["normal", "flying"],
    evolveFrom: "pidgeotto"
  },
  "rattata": {
    id: 19,
    egg: 2,
    candy: 25,
    name: "Rattata",
    type: ["normal"],
    evolveTo: "raticate"
  },
  "raticate": {
    id: 20,
    egg: 0,
    candy: 0,
    name: "Raticate",
    type: ["normal"],
    evolveFrom: "rattata"
  },
  "spearow": {
    id: 21,
    egg: 2,
    candy: 50,
    name: "Spearow",
    type: ["normal", "flying"],
    evolveTo: "Fearow"
  },
  "fearow": {
    id: 22,
    egg: 0,
    candy: 0,
    name: "Fearow",
    type: ["normal", "flying"],
    evolveFrom: "spearow"
  },
  "ekans": {
    id: 23,
    egg: 5,
    candy: 50,
    name: "Ekans",
    type: ["poison"],
    evolveTo: "arbok"
  },
  "arbok": {
    id: 24,
    egg: 0,
    candy: 0,
    name: "Arbok",
    type: ["poison"],
    evolveFrom: "ekans"
  },
  "pikachu": {
    id: 25,
    egg: 2,
    candy: 50,
    name: "Pikachu",
    type: ["electric"],
    evolveTo: "raichu"
  },
  "raichu": {
    id: 26,
    egg: 0,
    candy: 0,
    name: "Raichu",
    type: ["electric"],
    evolveFrom: "pikachu"
  },
  "sandshrew": {
    id: 27,
    egg: 5,
    candy: 50,
    name: "Sandshrew",
    type: ["ground"],
    evolveTo: "Sandslash"
  },
  "sandslash": {
    id: 28,
    egg: 0,
    candy: 0,
    name: "Sandslash",
    type: ["ground"],
    evolveFrom: "sandshrew"
  },
  "nidoran-f": {
    id: 29,
    egg: 5,
    candy: 25,
    name: "Nidoran ♀",
    type: ["poison"],
    evolveTo: "nidorina"
  },
  "nidorina": {
    id: 30,
    egg: 0,
    candy: 100,
    name: "Nidorina",
    type: ["poison"],
    evolveFrom: "nidoran-f",
    evolveTo: "nidoqueen"
  },
  "nidoqueen": {
    id: 31,
    egg: 0,
    candy: 0,
    name: "Nidoqueen",
    type: ["poison", "ground"],
    evolveFrom: "nidorina"
  },
  "nidoran-m": {
    id: 32,
    egg: 5,
    candy: 25,
    name: "Nidoran ♂",
    type: ["poison"],
    evolveTo: "nidorino"
  },
  "nidorino": {
    id: 33,
    egg: 0,
    candy: 100,
    name: "Nidorino",
    type: ["poison"],
    evolveFrom: "nidoran-m",
    evolveTo: "nidoking"
  },
  "nidoking": {
    id: 34,
    egg: 0,
    candy: 0,
    name: "Nidoking",
    type: ["poison", "ground"],
    evolveFrom: "nidorino"
  },
  "clefairy": {
    id: 35,
    egg: 2,
    candy: 50,
    name: "Clefairy",
    type: ["fairy"],
    evolveTo: "clefable"
  },
  "clefable": {
    id: 36,
    egg: 0,
    candy: 0,
    name: "Clefable",
    type: ["fairy"],
    evolveFrom: "clefairy"
  },
  "vulpix": {
    id: 37,
    egg: 5,
    candy: 50,
    name: "Vulpix",
    type: ["fire"],
    evolveTo: "ninetales"
  },
  "ninetales": {
    id: 38,
    egg: 0,
    candy: 0,
    name: "Ninetales",
    type: ["fire"],
    evolveFrom: "vulpix"
  },
  "jigglypuff": {
    id: 39,
    egg: 2,
    candy: 50,
    name: "Jigglypuff",
    type: ["normal", "fairy"],
    evolveTo: "wigglytuff"
  },
  "wigglytuff": {
    id: 40,
    egg: 0,
    candy: 0,
    name: "Wigglytuff",
    type: ["normal", "fairy"],
    evolveFrom: "jigglypuff"
  },
  "zubat": {
    id: 41,
    egg: 2,
    candy: 50,
    name: "Zubat",
    type: ["poison", "flying"],
    evolveTo: "golbat"
  },
  "golbat": {
    id: 42,
    egg: 0,
    candy: 0,
    name: "Golbat",
    type: ["poison", "flying"],
    evolveFrom: "Zubat"
  },
  "oddish": {
    id: 43,
    egg: 5,
    candy: 25,
    name: "Oddish",
    type: ["poison", "grass"],
    evolveTo: "gloom"
  },
  "gloom": {
    id: 44,
    egg: 0,
    candy: 100,
    name: "Gloom",
    type: ["poison", "grass"],
    evolveFrom: "oddish",
    evolveTo: "vileplume"
  },
  "vileplume": {
    id: 45,
    egg: 0,
    candy: 0,
    name: "Vileplume",
    type: ["poison", "grass"],
    evolveFrom: "gloom"
  },
  "paras": {
    id: 46,
    egg: 5,
    candy: 50,
    name: "Paras",
    type: ["bug", "grass"],
    evolveTo: "parasect"
  },
  "parasect": {
    id: 47,
    egg: 0,
    candy: 0,
    name: "Parasect",
    type: ["bug", "grass"],
    evolveFrom: "paras"
  },
  "venonat": {
    id: 48,
    egg: 5,
    candy: 50,
    name: "Venonat",
    type: ["bug", "poison"],
    evolveTo: "venomoth"
  },
  "venomoth": {
    id: 49,
    egg: 0,
    candy: 0,
    name: "Venomoth",
    type: ["bug", "poison"],
    evolveFrom: "venonat"
  },
  "diglett": {
    id: 50,
    egg: 5,
    candy: 50,
    name: "Diglett",
    type: ["ground"],
    evolveTo: "dugtrio"
  },
  "dugtrio": {
    id: 51,
    egg: 0,
    candy: 0,
    name: "Dugtrio",
    type: ["ground"],
    evolveFrom: "diglett"
  },
  "meowth": {
    id: 52,
    egg: 5,
    candy: 50,
    name: "Meowth",
    type: ["normal"],
    evolveTo: "persian"
  },
  "persian": {
    id: 53,
    egg: 0,
    candy: 0,
    name: "Persian",
    type: ["normal"],
    evolveFrom: "meowth"
  },
  "psyduck": {
    id: 54,
    egg: 5,
    candy: 50,
    name: "Psyduck",
    type: ["water"],
    evolveTo: "golduck"
  },
  "golduck": {
    id: 55,
    egg: 0,
    candy: 0,
    name: "Golduck",
    type: ["water"],
    evolveFrom: "psyduck"
  },
  "mankey": {
    id: 56,
    egg: 5,
    candy: 50,
    name: "Mankey",
    type: ["fighting"],
    evolveTo: "primeape"
  },
  "primeape": {
    id: 57,
    egg: 0,
    candy: 0,
    name: "Primeape",
    type: ["fighting"],
    evolveFrom: "mankey"
  },
  "growlithe": {
    id: 58,
    egg: 5,
    candy: 50,
    name: "Growlithe",
    type: ["fire"],
    evolveTo: "arcanine"
  },
  "arcanine": {
    id: 59,
    egg: 0,
    candy: 0,
    name: "Arcanine",
    type: ["fire"],
    evolveFrom: "growlithe"
  },
  "poliwag": {
    id: 60,
    egg: 5,
    candy: 25,
    name: "Poliwag",
    type: ["water"],
    evolveTo: "poliwhirl"
  },
  "poliwhirl": {
    id: 61,
    egg: 0,
    candy: 100,
    name: "Poliwhirl",
    type: ["water"],
    evolveFrom: "poliwag",
    evolveTo: "poliwrath"
  },
  "poliwrath": {
    id: 62,
    egg: 0,
    candy: 0,
    name: "Poliwrath",
    type: ["water", "fighting"],
    evolveFrom: "poliwhirl"
  },
  "abra": {
    id: 63,
    egg: 5,
    candy: 25,
    name: "Abra",
    type: ["psychic"],
    evolveTo: "kadabra"
  },
  "kadabra": {
    id: 64,
    egg: 0,
    candy: 100,
    name: "Kadabra",
    type: ["psychic"],
    evolveFrom: "abra",
    evolveTo: "alakazam"
  },
  "alakazam": {
    id: 65,
    egg: 0,
    candy: 0,
    name: "Alakazam",
    type: ["psychic"],
    evolveFrom: "kadabra"
  },
  "machop": {
    id: 66,
    egg: 5,
    candy: 25,
    name: "Machop",
    type: ["fighting"],
    evolveTo: "machoke"
  },
  "machoke": {
    id: 67,
    egg: 0,
    candy: 100,
    name: "Machoke",
    type: ["fighting"],
    evolveFrom: "machop",
    evolveTo: "machamp"
  },
  "machamp": {
    id: 68,
    egg: 0,
    candy: 0,
    name: "Machamp",
    type: ["fighting"],
    evolveFrom: "machoke"
  },
  "bellsprout": {
    id: 69,
    egg: 5,
    candy: 25,
    name: "Bellsprout",
    type: ["grass", "poison"],
    evolveTo: "weepinbell"
  },
  "weepinbell": {
    id: 70,
    egg: 0,
    candy: 100,
    name: "Weepinbell",
    type: ["grass", "poison"],
    evolveFrom: "bellsprout",
    evolveTo: "victreebel"
  },
  "victreebel": {
    id: 71,
    egg: 0,
    candy: 0,
    name: "Victreebel",
    type: ["grass", "poison"],
    evolveFrom: "weepinbell"
  },
  "tentacool": {
    id: 72,
    egg: 5,
    candy: 50,
    name: "Tentacool",
    type: ["water", "poison"],
    evolveTo: "tentacruel"
  },
  "tentacruel": {
    id: 73,
    egg: 0,
    candy: 0,
    name: "Tentacruel",
    type: ["water", "poison"],
    evolveFrom: "tentacool"
  },
  "geodude": {
    id: 74,
    egg: 2,
    candy: 25,
    name: "Geodude",
    type: ["rock", "ground"],
    evolveTo: "graveler"
  },
  "graveler": {
    id: 75,
    egg: 0,
    candy: 100,
    name: "Graveler",
    type: ["rock", "ground"],
    evolveFrom: "geodude",
    evolveTo: "golem"
  },
  "golem": {
    id: 76,
    egg: 0,
    candy: 0,
    name: "Golem",
    type: ["rock", "ground"],
    evolveFrom: "graveler"
  },
  "ponyta": {
    id: 77,
    egg: 5,
    candy: 50,
    name: "Ponyta",
    type: ["fire"],
    evolveTo: "rapidash"
  },
  "rapidash": {
    id: 78,
    egg: 0,
    candy: 0,
    name: "Rapidash",
    type: ["fire"],
    evolveFrom: "ponyta"
  },
  "slowpoke": {
    id: 79,
    egg: 5,
    candy: 50,
    name: "Slowpoke",
    type: ["water", "psychic"],
    evolveTo: "slowbro"
  },
  "slowbro": {
    id: 80,
    egg: 0,
    candy: 0,
    name: "Slowbro",
    type: ["water", "psychic"],
    evolveFrom: "slowpoke"
  },
  "magneton": {
    id: 81,
    egg: 5,
    candy: 50,
    name: "Magneton",
    type: ["electric", "steel"],
    evolveTo: "magnemite"
  },
  "magnemite": {
    id: 82,
    egg: 0,
    candy: 0,
    name: "Magnemite",
    type: ["electric", "steel"],
    evolveFrom: "magneton"
  },
  "farfetchd": {
    id: 83,
    egg: 5,
    candy: 0,
    name: "Farfetch'd",
    type: ["normal", "flying"]
  },
  "doduo": {
    id: 84,
    egg: 5,
    candy: 50,
    name: "Doduo",
    type: ["normal", "flying"],
    evolveTo: "dodrio"
  },
  "dodrio": {
    id: 85,
    egg: 0,
    candy: 0,
    name: "Dodrio",
    type: ["normal", "flying"],
    evolveFrom: "doduo"
  },
  "seel": {
    id: 86,
    egg: 5,
    candy: 50,
    name: "Seel",
    type: ["water"],
    evolveTo: "dewgong"
  },
  "dewgong": {
    id: 87,
    egg: 0,
    candy: 0,
    name: "Dewgong",
    type: ["water", "ice"],
    evolveFrom: "seel"
  },
  "grimer": {
    id: 88,
    egg: 5,
    candy: 50,
    name: "Grimer",
    type: ["poison"],
    evolveTo: "muk"
  },
  "muk": {
    id: 89,
    egg: 0,
    candy: 0,
    name: "Muk",
    type: ["poison"],
    evolveFrom: "grimer"
  },
  "shellder": {
    id: 90,
    egg: 5,
    candy: 50,
    name: "Shellder",
    type: ["water"],
    evolveTo: "cloyster"
  },
  "cloyster": {
    id: 91,
    egg: 0,
    candy: 0,
    name: "Cloyster",
    type: ["water", "ice"],
    evolveFrom: "shellder"
  },
  "gastly": {
    id: 92,
    egg: 5,
    candy: 25,
    name: "Gastly",
    type: ["ghost", "poison"],
    evolveTo: "haunter"
  },
  "haunter": {
    id: 93,
    egg: 0,
    candy: 100,
    name: "Haunter",
    type: ["ghost", "poison"],
    evolveFrom: "gastly",
    evolveTo: "gengar"
  },
  "gengar": {
    id: 94,
    egg: 0,
    candy: 0,
    name: "Gengar",
    type: ["ghost", "poison"],
    evolveFrom: "haunter"
  },
  "onix": {
    id: 95,
    egg: 10,
    candy: 0,
    name: "Onix",
    type: ["rock", "ground"]
  },
  "drowzee": {
    id: 96,
    egg: 5,
    candy: 50,
    name: "Drowzee",
    type: ["psychic"],
    evolveTo: "hypno"
  },
  "hypno": {
    id: 97,
    egg: 0,
    candy: 0,
    name: "Hypno",
    type: ["psychic"],
    evolveFrom: "drowzee"
  },
  "krabby": {
    id: 98,
    egg: 5,
    candy: 50,
    name: "Krabby",
    type: ["water"],
    evolveTo: "kingler"
  },
  "kingler": {
    id: 99,
    egg: 0,
    candy: 0,
    name: "Kingler",
    type: ["water"],
    evolveFrom: "krabby"
  },
  "voltorb": {
    id: 100,
    egg: 5,
    candy: 50,
    name: "Voltorb",
    type: ["electric"],
    evolveTo: "electrode"
  },
  "electrode": {
    id: 101,
    egg: 0,
    candy: 0,
    name: "Electrode",
    type: ["electric"],
    evolveFrom: "voltorb"
  },
  "exeggcute": {
    id: 102,
    egg: 5,
    candy: 50,
    name: "Exeggcute",
    type: ["grass", "psychic"],
    evolveTo: "exeggutor"
  },
  "exeggutor": {
    id: 103,
    egg: 0,
    candy: 0,
    name: "Exeggutor",
    type: ["grass", "psychic"],
    evolveFrom: "exeggcute"
  },
  "cubone": {
    id: 104,
    egg: 5,
    candy: 50,
    name: "Cubone",
    type: ["ground"],
    evolveTo: "marowak"
  },
  "marowak": {
    id: 105,
    egg: 0,
    candy: 0,
    name: "Marowak",
    type: ["ground"],
    evolveFrom: "cubone"
  },
  "hitmonlee": {
    id: 106,
    egg: 10,
    candy: 0,
    name: "Hitmonlee",
    type: ["fighting"]
  },
  "hitmonchan": {
    id: 107,
    egg: 10,
    candy: 0,
    name: "Hitmonchan",
    type: ["fighting"]
  },
  "lickitung": {
    id: 108,
    egg: 5,
    candy: 0,
    name: "Lickitung",
    type: ["normal"]
  },
  "koffing": {
    id: 109,
    egg: 5,
    candy: 50,
    name: "Koffing",
    type: ["poison"],
    evolveTo: "weezing"
  },
  "weezing": {
    id: 110,
    egg: 0,
    candy: 0,
    name: "Weezing",
    type: ["poison"],
    evolveFrom: "koffing"
  },
  "rhyhorn": {
    id: 111,
    egg: 5,
    candy: 50,
    name: "Rhyhorn",
    type: ["ground", "rock"],
    evolveTo: "rhydon"
  },
  "rhydon": {
    id: 112,
    egg: 0,
    candy: 0,
    name: "Rhydon",
    type: ["ground", "rock"],
    evolveFrom: "rhyhorn"
  },
  "chansey": {
    id: 113,
    egg: 10,
    candy: 0,
    name: "Chansey",
    type: ["normal"]
  },
  "tangela": {
    id: 114,
    egg: 5,
    candy: 0,
    name: "Tangela",
    type: ["grass"]
  },
  "kangaskhan": {
    id: 115,
    egg: 5,
    candy: 0,
    name: "Kangaskhan",
    type: ["normal"]
  },
  "horsea": {
    id: 116,
    egg: 5,
    candy: 50,
    name: "Horsea",
    type: ["water"],
    evolveTo: "seadra"
  },
  "seadra": {
    id: 117,
    egg: 0,
    candy: 0,
    name: "Seadra",
    type: ["water"],
    evolveFrom: "horsea"
  },
  "goldeen": {
    id: 118,
    egg: 5,
    candy: 50,
    name: "Goldeen",
    type: ["water"],
    evolveTo: "seaking"
  },
  "seaking": {
    id: 119,
    egg: 0,
    candy: 0,
    name: "Seaking",
    type: ["water"],
    evolveFrom: 'goldeen'
  },
  "staryu": {
    id: 120,
    egg: 5,
    candy: 50,
    name: "Staryu",
    type: ["water"],
    evolveTo: "starmie"
  },
  "starmie": {
    id: 121,
    egg: 0,
    candy: 0,
    name: "Starmie",
    type: ["water", "psychic"],
    evolveFrom: "staryu"
  },
  "mr-mime": {
    id: 122,
    egg: 10,
    candy: 0,
    name: "Mr. Mime",
    type: ["psychic", "fairy"]
  },
  "scyther": {
    id: 123,
    egg: 01,
    candy: 0,
    name: "Scyther",
    type: ["bug", "flying"]
  },
  "jynx": {
    id: 124,
    egg: 10,
    candy: 0,
    name: "Jynx",
    type: ["ice", "psychic"]
  },
  "electabuzz": {
    id: 125,
    egg: 10,
    candy: 0,
    name: "Electabuzz",
    type: ["electric"]
  },
  "magmar": {
    id: 126,
    egg: 10,
    candy: 0,
    name: "Magmar",
    type: ["fire"]
  },
  "pinsir": {
    id: 127,
    egg: 10,
    candy: 0,
    name: "Pinsir",
    type: ["bug"]
  },
  "tauros": {
    id: 128,
    egg: 5,
    candy: 0,
    name: "Tauros",
    type: ["normal"]
  },
  "magikarp": {
    id: 129,
    egg: 2,
    candy: 400,
    name: "Magikarp",
    type: ["water"],
    evolveTo: "gyarados"
  },
  "gyarados": {
    id: 130,
    egg: 0,
    candy: 0,
    name: "Gyarados",
    type: ["water", "flying"],
    evolveFrom: "magikarp"
  },
  "lapras": {
    id: 131,
    egg: 10,
    candy: 0,
    name: "Lapras",
    type: ["water", "ice"]
  },
  "ditto": {
    id: 132,
    egg: 0,
    candy: 0,
    name: "Ditto",
    type: ["normal"]
  },
  "eevee": {
    id: 133,
    egg: 10,
    candy: 25,
    name: "Eevee",
    type: ["normal"],
    evolveTo: ["vaporeon", "jolteon", "flareon"]
  },
  "vaporeon": {
    id: 134,
    egg: 0,
    candy: 0,
    name: "Vaporeon",
    type: ["water"],
    evolveFrom: "eevee"
  },
  "jolteon": {
    id: 135,
    egg: 0,
    candy: 0,
    name: "Jolteon",
    type: ["electric"],
    evolveFrom: "eevee"
  },
  "flareon": {
    id: 136,
    egg: 0,
    candy: 0,
    name: "Flareon",
    type: ["fire"],
    evolveFrom: "eevee"
  },
  "porygon": {
    id: 137,
    egg: 5,
    candy: 0,
    name: "Porygon",
    type: ["normal"]
  },
  "omanyte": {
    id: 138,
    egg: 10,
    candy: 50,
    name: "Omanyte",
    type: ["rock", "water"],
    evolveTo: "omastar"
  },
  "omastar": {
    id: 139,
    egg: 0,
    candy: 0,
    name: "Omastar",
    type: ["rock", "water"],
    evolveFrom: "omanyte"
  },
  "kabuto": {
    id: 140,
    egg: 10,
    candy: 50,
    name: "Kabuto",
    type: ["rock", "water"],
    evolveTo: "kabutops"
  },
  "kabutops": {
    id: 141,
    egg: 0,
    candy: 0,
    name: "Kabutops",
    type: ["rock", "water"],
    evolveFrom: "kabuto"
  },
  "aerodactyl": {
    id: 142,
    egg: 10,
    candy: 0,
    name: "Aerodactyl",
    type: ["rock", "flying"]
  },
  "snorlax": {
    id: 143,
    egg: 10,
    candy: 0,
    name: "Snorlax",
    type: ["normal"]
  },
  "articuno": {
    id: 144,
    egg: 0,
    candy: 0,
    name: "Articuno",
    type: ["ice", "flying"]
  },
  "zapdos": {
    id: 145,
    egg: 0,
    candy: 0,
    name: "Zapdos",
    type: ["electric", "flying"]
  },
  "moltres": {
    id: 146,
    egg: 0,
    candy: 0,
    name: "Moltres",
    type: ["fire", "flying"]
  },
  "dratini": {
    id: 147,
    egg: 10,
    candy: 25,
    name: "Dratini",
    type: ["dragon"],
    evolveTo: "dragonair"
  },
  "dragonair": {
    id: 148,
    egg: 0,
    candy: 100,
    name: "Dragonair",
    type: ["dragon"],
    evolveFrom: "dratini",
    evolveTo: "dragonite"
  },
  "dragonite": {
    id: 149,
    egg: 0,
    candy: 0,
    name: "Dragonite",
    type: ["dragon", "flying"],
    evolveFrom: "dragonair"
  },
  "mewtwo": {
    id: 150,
    egg: 0,
    candy: 0,
    name: "Mewtwo",
    type: ["psychic"]
  },
  "mew": {
    id: 151,
    egg: 0,
    candy: 0,
    name: "Mew",
    type: ["psychic"]
  }
};
