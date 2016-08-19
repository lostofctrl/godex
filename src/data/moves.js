/*
  moves.js
  godex - list of pokemon moves
  data garnered from pokemongo.gamepress.gg
*/

// merge with godex if exists
var godex = godex ? godex : {};
godex.moves = {};

godex.moves.quick = {
  "acid": {
    name: "Acid",
    type: "poison",
    attack: 10,
    cooldown: 1.05
  },
  "bite": {
    name: "Bite",
    type: "dark",
    attack: 6,
    cooldown: 0.5
  },
  "bubble": {
    name: "Bubble",
    type: "water",
    attack: 25,
    cooldown: 2.3
  },
  "bug-bite": {
    name: "Bug Bite",
    type: "bug",
    attack: 5,
    cooldown: 0.45
  },
  "bullet-punch": {
    name: "Bullet Punch",
    type: "steel",
    attack: 10,
    cooldown: 1.2
  },
  "confusion": {
    name: "Confusion",
    type: "psychic",
    attack: 15,
    cooldown: 1.51
  },
  "cut": {
    name: "Cut",
    type: "normal",
    attack: 12,
    cooldown: 1.13
  },
  "dragon-breath": {
    name: "Dragon Breath",
    type: "dragon",
    attack: 6,
    cooldown: 0.5
  },
  "ember": {
    name: "Ember",
    type: "fire",
    attack: 10,
    cooldown: 1.05
  },
  "feint-attack": {
    name: "Feint Attack",
    type: "dark",
    attack: 12,
    cooldown: 1.04
  },
  "fire-fang": {
    name: "Fire Fang",
    type: "fire",
    attack: 10,
    cooldown: 0.84
  },
  "frost-breath": {
    name: "Frost Breath",
    type: "ice",
    attack: 9,
    cooldown: 0.8
  },
  "fury-cutter": {
    name: "Fury Cutter",
    type: "bug",
    attack: 3,
    cooldown: 0.4
  },
  "ice-shard": {
    name: "Ice Shard",
    type: "ice",
    attack: 15,
    cooldown: 1.4
  },
  "karate-chop": {
    name: "Karate Chop",
    type: "fighting",
    attack: 6,
    cooldown: 0.8
  },
  "lick": {
    name: "Lick",
    type: "ghost",
    attack: 5,
    cooldown: 0.5
  },
  "low-kick": {
    name: "Low Kick",
    type: "fighting",
    attack: 5,
    cooldown: 0.6
  },
  "metal-claw": {
    name: "Metal Claw",
    type: "steel",
    attack: 8,
    cooldown: 0.63
  },
  "mud-shot": {
    name: "Mud Shot",
    type: "ground",
    attack: 6,
    cooldown: 0.55
  },
  "mud-slap": {
    name: "Mud Slap",
    type: "ground",
    attack: 15,
    cooldown: 1.35
  },
  "peck": {
    name: "Peck",
    type: "flying",
    attack: 10,
    cooldown: 1.15
  },
  "poison-jab": {
    name: "Poison Jab",
    type: "poison",
    attack: 12,
    cooldown: 1.05
  },
  "poison-sting": {
    name: "Poison Sting",
    type: "poison",
    attack: 6,
    cooldown: 0.58
  },
  "pound": {
    name: "Pound",
    type: "normal",
    attack: 7,
    cooldown: 0.54
  },
  "pyscho-cut": {
    name: "Psycho Cut",
    type: "psychic",
    attack: 7,
    cooldown: 0.57
  },
  "quick-attack": {
    name: "Quick Attack",
    type: "normal",
    attack: 10,
    cooldown: 1.33
  },
  "razor-leaf": {
    name: "Razor Leaf",
    type: "grass",
    attack: 15,
    cooldown: 1.45
  },
  "rock-smash": {
    name: "Rock Smash",
    type: "fighting",
    attack: 15,
    cooldown: 1.41
  },
  "rock-throw": {
    name: "Rock Throw",
    type: "rock",
    attack: 12,
    cooldown: 1.36
  },
  "scratch": {
    name: "Scratch",
    type: "normal",
    attack: 6,
    cooldown: 0.5
  },
  "shadow-claw": {
    name: "Shadow Claw",
    type: "ghost",
    attack: 11,
    cooldown: 0.95
  },
  "spark": {
    name: "Spark",
    type: "electric",
    attack: 7,
    cooldown: 0.7
  },
  "splash": {
    name: "Splash",
    type: "water",
    attack: 0,
    cooldown: 1.23
  },
  "steel-wing": {
    name: "Steel Wing",
    type: "steel",
    attack: 15,
    cooldown: 1.33
  },
  "sucker-punch": {
    name: "Sucker Punch",
    type: "dark",
    attack: 7,
    cooldown: 0.7
  },
  "tackle": {
    name: "Tackle",
    type: "normal",
    attack: 12,
    cooldown: 1.1
  },
  "thunder-shock": {
    name: "Thunder Shock",
    type: "electric",
    attack: 5,
    cooldown: 0.6
  },
  "vine-whip": {
    name: "Vine Whip",
    type: "grass",
    attack: 7,
    cooldown: 0.65
  },
  "water-gun": {
    name: "Water Gun",
    type: "water",
    attack: 6,
    cooldown: 0.5
  },
  "wing-attack": {
    name: "Wing Attack",
    type: "flying",
    attack: 9,
    cooldown: 0.75
  },
  "zen-headbutt": {
    name: "Zen Headbutt",
    type: "psychic",
    attack: 12,
    cooldown: 1.05
  }
};

godex.moves.charge = {
  // charge moves
  "aerial-ace": {
    name: "Aerial Ace",
    type: "flying",
    charges: 4,
    cooldown: 2.9,
    dodge: 0.6,
    critical: 0.05,
    attack: 30
  },
  "air-cutter": {
    name: "Air Cutter",
    type: "flying",
    charges: 4,
    cooldown: 3.3,
    dodge: 0.9,
    critical: 0.25,
    attack: 30
  },
  "ancient-power": {
    name: "Ancient Power",
    type: "rock",
    charges: 4,
    cooldown: 3.6,
    dodge: 0.35,
    critical: 0.05,
    attack: 35
  },
  "aqua-jet": {
    name: "Aqua Jet",
    type: "water",
    charges: 5,
    cooldown: 2.35,
    dodge: 0.4,
    critical: 0.05,
    attack: 25
  },
  "aqua-tail": {
    name: "Aqua Tail",
    type: "water",
    charges: 2,
    cooldown: 2.35,
    dodge: 0.2,
    critical: 0.05,
    attack: 45
  },
  "blizzard": {
    name: "Blizzard",
    type: "ice",
    charges: 1,
    cooldown: 3.9,
    dodge: 0,
    critical: 0.05,
    attack: 100
  },
  "body-slam": {
    name: "Body Slam",
    type: "normal",
    charges: 2,
    cooldown: 1.56,
    dodge: 0.2,
    critical: 0.05,
    attack: 40
  },
  "bone-club": {
    name: "Bone Club",
    type: "ground",
    charges: 4,
    cooldown: 1.6,
    dodge: 0.4,
    critical: 0.25,
    attack: 30
  },
  "brick-break": {
    name: "Brick Break",
    type: "fighting",
    charges: 3,
    cooldown: 1.6,
    dodge: 0.4,
    critical: 0.25,
    attack: 25
  },
  "brine": {
    name: "Brine",
    type: "water",
    charges: 4,
    cooldown: 2.4,
    dodge: 0.35,
    critical: 0.05,
    attack: 25
  },
  "bubble-beam": {
    name: "Bubble Beam",
    type: "water",
    charges: 4,
    cooldown: 2.9,
    dodge: 0.2,
    critical: 0.05,
    attack: 30
  },
  "bug-buzz": {
    name: "Bug Buzz",
    type: "bug",
    charges: 2,
    cooldown: 4.25,
    dodge: 1.5,
    critical: 0.05,
    attack: 75
  },
  "bulldoze": {
    name: "Bulldoze",
    type: "ground",
    charges: 4,
    cooldown: 3.4,
    dodge: 1.1,
    critical: 0.05,
    attack: 35
  },
  "cross-chop": {
    name: "Cross Chop",
    type: "fighting",
    charges: 1,
    cooldown: 2,
    dodge: 0.3,
    critical: 0.25,
    attack: 60
  },
  "cross-poison": {
    name: "Cross Poison",
    type: "poison",
    charges: 4,
    cooldown: 1.5,
    dodge: 0.3,
    critical: 0.25,
    attack: 25
  },
  "dark-pulse": {
    name: "Dark Pulse",
    type: "dark",
    charges: 3,
    cooldown: 3.5,
    dodge: 1.1,
    critical: 0.05,
    attack: 45
  },
  "dazzling-gleam": {
    name: "Dazzling Gleam",
    type: "fairy",
    charges: 3,
    cooldown: 4.2,
    dodge: 0.8,
    critical: 0.05,
    attack: 55
  },
  "dig": {
    name: "Dig",
    type: "ground",
    charges: 3,
    cooldown: 5.8,
    dodge: 0.4,
    critical: 0.05,
    attack: 70
  },
  "disarming-voice": {
    name: "Disarming Voice",
    type: "fairy",
    charges: 5,
    cooldown: 3.9,
    dodge: 1.8,
    critical: 0.05,
    attack: 25
  },
  "discharge": {
    name: "Discharge",
    type: "electric",
    charges: 3,
    cooldown: 2.5,
    dodge: 0.7,
    critical: 0.05,
    attack: 35
  },
  "dragon-claw": {
    name: "Dragon Claw",
    type: "dragon",
    charges: 2,
    cooldown: 1.6,
    dodge: 0.2,
    critical: 0.25,
    attack: 35
  },
  "dragon-pulse": {
    name: "Dragon Pulse",
    type: "dragon",
    charges: 2,
    cooldown: 3.6,
    dodge: 1.2,
    critical: 0.05,
    attack: 65
  },
  "draining-kiss": {
    name: "Draining Kiss",
    type: "fairy",
    charges: 5,
    cooldown: 2.8,
    dodge: 0.1,
    critical: 0.05,
    attack: 25
  },
  "drill-peck": {
    name: "Drill Peck",
    type: "flying",
    charges: 3,
    cooldown: 2.7,
    dodge: 0.9,
    critical: 0.05,
    attack: 40
  },
  "drill-run": {
    name: "Drill Run",
    type: "ground",
    charges: 3,
    cooldown: 3.4,
    dodge: 0.7,
    critical: 0.25,
    attack: 50
  },
  "earthquake": {
    name: "Earthquake",
    type: "ground",
    charges: 1,
    cooldown: 4.2,
    dodge: 1.95,
    critical: 0.05,
    attack: 100
  },
  "fire-blast": {
    name: "Fire Blast",
    type: "fire",
    charges: 1,
    cooldown: 4.1,
    dodge: 0.4,
    critical: 0.05,
    attack: 100
  },
  "fire-punch": {
    name: "Fire Punch",
    type: "fire",
    charges: 3,
    cooldown: 2.8,
    dodge: 0.51,
    critical: 0.05,
    attack: 40
  },
  "flame-burst": {
    name: "Flame Burst",
    type: "fire",
    charges: 4,
    cooldown: 2.1,
    dodge: 0.2,
    critical: 0.05,
    attack: 30
  },
  "flame-charge": {
    name: "Flame Charge",
    type: "fire",
    charges: 5,
    cooldown: 3.1,
    dodge: 0.2,
    critical: 0.05,
    attack: 25
  },
  "flame-wheel": {
    name: "Flame Wheel",
    type: "fire",
    charges: 4,
    cooldown: 4.6,
    dodge: 0.5,
    critical: 0.05,
    attack: 40
  },
  "flamethrower": {
    name: "Flamethrower",
    type: "fire",
    charges: 2,
    cooldown: 2.9,
    dodge: 0.9,
    critical: 0.05,
    attack: 55
  },
  "flash-cannon": {
    name: "Flash Cannon",
    type: "steel",
    charges: 3,
    cooldown: 3.9,
    dodge: 1.1,
    critical: 0.05,
    attack: 60
  },
  "gunk-shot": {
    name: "Gunk Shot",
    type: "poison",
    charges: 1,
    cooldown: 3,
    dodge: 0.4,
    critical: 0.05,
    attack: 65
  },
  "heat-wave": {
    name: "Heat Wave",
    type: "fire",
    charges: 1,
    cooldown: 3.8,
    dodge: 0.4,
    critical: 0.05,
    attack: 80
  },
  "horn-attack": {
    name: "Horn Attack",
    type: "normal",
    charges: 4,
    cooldown: 2.2,
    dodge: 0.3,
    critical: 0.05,
    attack: 25
  },
  "hurricane": {
    name: "Hurricane",
    type: "flying",
    charges: 1,
    cooldown: 3.2,
    dodge: 1.77,
    critical: 0.05,
    attack: 80
  },
  "hydro-pump": {
    name: "Hydro Pump",
    type: "water",
    charges: 1,
    cooldown: 3.8,
    dodge: 2.1,
    critical: 0.05,
    attack: 90
  },
  "hyper-beam": {
    name: "Hyper Beam",
    type: "normal",
    charges: 1,
    cooldown: 5,
    dodge: 0.8,
    critical: 0.05,
    attack: 120
  },
  "hyper-fang": {
    name: "Hyper Fang",
    type: "normal",
    charges: 3,
    cooldown: 2.1,
    dodge: 0.3,
    critical: 0.05,
    attack: 35
  },
  "ice-beam": {
    name: "Ice Beam",
    type: "ice",
    charges: 2,
    cooldown: 3.65,
    dodge: 1.35,
    critical: 0.05,
    attack: 65
  },
  "ice-punch": {
    name: "Ice Punch",
    type: "ice",
    charges: 3,
    cooldown: 3.5,
    dodge: 1.1,
    critical: 0.05,
    attack: 45
  },
  "icy-wind": {
    name: "Icy Wind",
    type: "ice",
    charges: 5,
    cooldown: 3.8,
    dodge: 0.7,
    critical: 0.05,
    attack: 25
  },
  "iron-head": {
    name: "Iron Head",
    type: "steel",
    charges: 2,
    cooldown: 2,
    dodge: 0.25,
    critical: 0.05,
    attack: 30
  },
  "leaf-blade": {
    name: "Leaf Blade",
    type: "grass",
    charges: 2,
    cooldown: 2.8,
    dodge: 1,
    critical: 0.25,
    attack: 55
  },
  "low-sweep": {
    name: "Low Sweep",
    type: "fighting",
    charges: 4,
    cooldown: 2.25,
    dodge: 0.15,
    critical: 0.05,
    attack: 30
  },
  "magnet-bomb": {
    name: "Magnet Bomb",
    type: "steel",
    charges: 4,
    cooldown: 2.8,
    dodge: 0.55,
    critical: 0.05,
    attack: 30
  },
  "megahorn": {
    name: "Megahorn",
    type: "bug",
    charges: 1,
    cooldown: 3.2,
    dodge: 0.3,
    critical: 0.05,
    attack: 80
  },
  "moonblast": {
    name: "Moonblast",
    type: "fairy",
    charges: 1,
    cooldown: 4.1,
    dodge: 0.6,
    critical: 0.05,
    attack: 85
  },
  "mud-bomb": {
    name: "Mud Bomb",
    type: "ground",
    charges: 4,
    cooldown: 2.6,
    dodge: 0.45,
    critical: 0.05,
    attack: 30
  },
  "night-slash": {
    name: "Night Slash",
    type: "dark",
    charges: 4,
    cooldown: 2.7,
    dodge: 0.2,
    critical: 0.25,
    attack: 30
  },
  "ominous-wind": {
    name: "Ominous Wind",
    type: "ghost",
    charges: 4,
    cooldown: 3.1,
    dodge: 0.25,
    critical: 0.05,
    attack: 30
  },
  "petal-blizzard": {
    name: "Petal Blizzard",
    type: "grass",
    charges: 2,
    cooldown: 3.2,
    dodge: 1,
    critical: 0.05,
    attack: 65
  },
  "play-rough": {
    name: "Play Rough",
    type: "fairy",
    charges: 2,
    cooldown: 2.9,
    dodge: 1.3,
    critical: 0.05,
    attack: 55
  },
  "poison-fang": {
    name: "Poison Fang",
    type: "poison",
    charges: 5,
    cooldown: 2.4,
    dodge: 0.2,
    critical: 0.05,
    attack: 25
  },
  "power-gem": {
    name: "Power Gem",
    type: "rock",
    charges: 3,
    cooldown: 2.9,
    dodge: 0.8,
    critical: 0.05,
    attack: 40
  },
  "power-whip": {
    name: "Power Whip",
    type: "grass",
    charges: 1,
    cooldown: 2.8,
    dodge: 1.3,
    critical: 0.25,
    attack: 70
  },
  "psybeam": {
    name: "Psybeam",
    type: "psychic",
    charges: 4,
    cooldown: 3.88,
    dodge: 1.3,
    critical: 0.05,
    attack: 40
  },
  "psychic": {
    name: "Psychic",
    type: "psychic",
    charges: 2,
    cooldown: 2.8,
    dodge: 1.2,
    critical: 0.05,
    attack: 55
  },
  "psyshock": {
    name: "Psyshock",
    type: "psychic",
    charges: 3,
    cooldown: 2.7,
    dodge: 0.5,
    critical: 0.05,
    attack: 40
  },
  "rock-slide": {
    name: "Rock Slide",
    type: "rock",
    charges: 3,
    cooldown: 3.2,
    dodge: 1.4,
    critical: 0.05,
    attack: 50
  },
  "rock-tomb": {
    name: "Rock Tomb",
    type: "rock",
    charges: 3,
    cooldown: 3.4,
    dodge: 0.9,
    critical: 0.25,
    attack: 30
  },
  "scald": {
    name: "Scald",
    type: "water",
    charges: 3,
    cooldown: 4,
    dodge: 2.1,
    critical: 0.05,
    attack: 55
  },
  "seed-bomb": {
    name: "Seed Bomb",
    type: "bug",
    charges: 3,
    cooldown: 2.4,
    dodge: 0.5,
    critical: 0.05,
    attack: 40
  },
  "shadow-ball": {
    name: "Shadow Ball",
    type: "ghost",
    charges: 3,
    cooldown: 3.08,
    dodge: 0.3,
    critical: 0.05,
    attack: 45
  },
  "signal-beam": {
    name: "Signal Beam",
    type: "bug",
    charges: 3,
    cooldown: 3.1,
    dodge: 1,
    critical: 0.05,
    attack: 45
  },
  "sludge": {
    name: "Sludge",
    type: "poison",
    charges: 4,
    cooldown: 2.6,
    dodge: 0.5,
    critical: 0.05,
    attack: 30
  },
  "sludge-bomb": {
    name: "Sludge Bomb",
    type: "poison",
    charges: 2,
    cooldown: 2.6,
    dodge: 0.5,
    critical: 0.05,
    attack: 55
  },
  "sludge-wave": {
    name: "Sludge Wave",
    type: "poison",
    charges: 1,
    cooldown: 3.4,
    dodge: 0.9,
    critical: 0.05,
    attack: 70
  },
  "solar-beam": {
    name: "Solar Beam",
    type: "grass",
    charges: 1,
    cooldown: 4.9,
    dodge: 1.7,
    critical: 0.05,
    attack: 120
  },
  "stomp": {
    name: "Stomp",
    type: "normal",
    charges: 4,
    cooldown: 2.1,
    dodge: 0.7,
    critical: 0.05,
    attack: 30
  },
  "stone-edge": {
    name: "Stone Edge",
    type: "rock",
    charges: 1,
    cooldown: 3.1,
    dodge: 0.4,
    critical: 0.05,
    attack: 80
  },
  "struggle": {
    name: "Struggle",
    type: "normal",
    charges: 5,
    cooldown: 1.7,
    dodge: 0.7,
    critical: 0.05,
    attack: 15
  },
  "submission": {
    name: "Submission",
    type: "fighting",
    charges: 3,
    cooldown: 2.1,
    dodge: 0.15,
    critical: 0.05,
    attack: 30
  },
  "swift": {
    name: "Swift",
    type: "normal",
    charges: 4,
    cooldown: 3,
    dodge: 0.5,
    critical: 0.05,
    attack: 30
  },
  "thunder": {
    name: "Thunder",
    type: "electric",
    charges: 1,
    cooldown: 4.3,
    dodge: 1.55,
    critical: 0.05,
    attack: 100
  },
  "thunder-punch": {
    name: "Thunder Punch",
    type: "electric",
    charges: 3,
    cooldown: 2.4,
    dodge: 0.25,
    critical: 0.05,
    attack: 40
  },
  "thunderbolt": {
    name: "Thunderbolt",
    type: "electric",
    charges: 2,
    cooldown: 2.7,
    dodge: 0.8,
    critical: 0.05,
    attack: 55
  },
  "twister": {
    name: "Twister",
    type: "dragon",
    charges: 5,
    cooldown: 2.7,
    dodge: 1.75,
    critical: 0.05,
    attack: 25
  },
  "vice-grip": {
    name: "Vice Grip",
    type: "normal",
    charges: 5,
    cooldown: 2.1,
    dodge: 0.25,
    critical: 0.05,
    attack: 25
  },
  "water-pulse": {
    name: "Water Pulse",
    type: "water",
    charges: 4,
    cooldown: 3.3,
    dodge: 1,
    critical: 0.05,
    attack: 35
  },
  "wrap": {
    name: "Wrap",
    type: "normal",
    charges: 5,
    cooldown: 4,
    dodge: 0.6,
    critical: 0.05,
    attack: 25
  },
  "x-scissor": {
    name: "X-Scissor",
    type: "bug",
    charges: 3,
    cooldown: 2.1,
    dodge: 0.25,
    critical: 0.05,
    attack: 35
  }
};
