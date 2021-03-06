/*
  moves-charge.js
  godex - list of pokemon moves
  data garnered from pokemongo.gamepress.gg
*/

var moves = {
  // quick moves
  "acid": {
    name: "Acid",
    moveType: "quick",
    type: "poison",
    attack: 10,
    cooldown: 1.05
  },
  "bite": {
    name: "Bite",
    moveType: "quick",
    type: "dark",
    attack: 6,
    cooldown: 0.5
  },
  "bubble": {
    name: "Bubble",
    moveType: "quick",
    type: "water",
    attack: 25,
    cooldown: 2.3
  },
  "bug-bite": {
    name: "Bug Bite",
    moveType: "quick",
    type: "bug",
    attack: 5,
    cooldown: 0.45
  },
  "bullet-punch": {
    name: "Bullet Punch",
    moveType: "quick",
    type: "steel",
    attack: 10,
    cooldown: 1.2
  },
  "confusion": {
    name: "Confusion",
    moveType: "quick",
    type: "psychic",
    attack: 15,
    cooldown: 1.51
  },
  "cut": {
    name: "Cut",
    moveType: "quick",
    type: "normal",
    attack: 12,
    cooldown: 1.13
  },
  "dragon-breath": {
    name: "Dragon Breath",
    moveType: "quick",
    type: "dragon",
    attack: 6,
    cooldown: 0.5
  },
  "ember": {
    name: "Ember",
    moveType: "quick",
    type: "fire",
    attack: 10,
    cooldown: 1.05
  },
  "feint-attack": {
    name: "Feint Attack",
    moveType: "quick",
    type: "dark",
    attack: 12,
    cooldown: 1.04
  },
  "fire-fang": {
    name: "Fire Fang",
    moveType: "quick",
    type: "fire",
    attack: 10,
    cooldown: 0.84
  },
  "frost-breath": {
    name: "Frost Breath",
    moveType: "quick",
    type: "ice",
    attack: 9,
    cooldown: 0.8
  },
  "fury-cutter": {
    name: "Fury Cutter",
    moveType: "quick",
    type: "bug",
    attack: 3,
    cooldown: 0.4
  },
  "ice-shard": {
    name: "Ice Shard",
    moveType: "quick",
    type: "ice",
    attack: 15,
    cooldown: 1.4
  },
  "karate-chop": {
    name: "Karate Chop",
    moveType: "quick",
    type: "fighting",
    attack: 6,
    cooldown: 0.8
  },
  "lick": {
    name: "Lick",
    moveType: "quick",
    type: "ghost",
    attack: 5,
    cooldown: 0.5
  },
  "low-kick": {
    name: "Low Kick",
    moveType: "quick",
    type: "fighting",
    attack: 5,
    cooldown: 0.6
  },
  "metal-claw": {
    name: "Metal Claw",
    moveType: "quick",
    type: "steel",
    attack: 8,
    cooldown: 0.63
  },
  "mud-shot": {
    name: "Mud Shot",
    moveType: "quick",
    type: "ground",
    attack: 6,
    cooldown: 0.55
  },
  "mud-slap": {
    name: "Mud Slap",
    moveType: "quick",
    type: "ground",
    attack: 15,
    cooldown: 1.35
  },
  "peck": {
    name: "Peck",
    moveType: "quick",
    type: "flying",
    attack: 10,
    cooldown: 1.15
  },
  "poison-jab": {
    name: "Poison Jab",
    moveType: "quick",
    type: "poison",
    attack: 12,
    cooldown: 1.05
  },
  "poison-sting": {
    name: "Poison Sting",
    moveType: "quick",
    type: "poison",
    attack: 6,
    cooldown: 0.58
  },
  "pound": {
    name: "Pound",
    moveType: "quick",
    type: "normal",
    attack: 7,
    cooldown: 0.54
  },
  "psycho-cut": {
    name: "Psycho Cut",
    moveType: "quick",
    type: "psychic",
    attack: 7,
    cooldown: 0.57
  },
  "quick-attack": {
    name: "Quick Attack",
    moveType: "quick",
    type: "normal",
    attack: 10,
    cooldown: 1.33
  },
  "razor-leaf": {
    name: "Razor Leaf",
    moveType: "quick",
    type: "grass",
    attack: 15,
    cooldown: 1.45
  },
  "rock-smash": {
    name: "Rock Smash",
    moveType: "quick",
    type: "fighting",
    attack: 15,
    cooldown: 1.41
  },
  "rock-throw": {
    name: "Rock Throw",
    moveType: "quick",
    type: "rock",
    attack: 12,
    cooldown: 1.36
  },
  "scratch": {
    name: "Scratch",
    moveType: "quick",
    type: "normal",
    attack: 6,
    cooldown: 0.5
  },
  "shadow-claw": {
    name: "Shadow Claw",
    moveType: "quick",
    type: "ghost",
    attack: 11,
    cooldown: 0.95
  },
  "spark": {
    name: "Spark",
    moveType: "quick",
    type: "electric",
    attack: 7,
    cooldown: 0.7
  },
  "splash": {
    name: "Splash",
    moveType: "quick",
    type: "water",
    attack: 0,
    cooldown: 1.23
  },
  "steel-wing": {
    name: "Steel Wing",
    moveType: "quick",
    type: "steel",
    attack: 15,
    cooldown: 1.33
  },
  "sucker-punch": {
    name: "Sucker Punch",
    moveType: "quick",
    type: "dark",
    attack: 7,
    cooldown: 0.7
  },
  "tackle": {
    name: "Tackle",
    moveType: "quick",
    type: "normal",
    attack: 12,
    cooldown: 1.1
  },
  "thunder-shock": {
    name: "Thunder Shock",
    moveType: "quick",
    type: "electric",
    attack: 5,
    cooldown: 0.6
  },
  "vine-whip": {
    name: "Vine Whip",
    moveType: "quick",
    type: "grass",
    attack: 7,
    cooldown: 0.65
  },
  "water-gun": {
    name: "Water Gun",
    moveType: "quick",
    type: "water",
    attack: 6,
    cooldown: 0.5
  },
  "wing-attack": {
    name: "Wing Attack",
    moveType: "quick",
    type: "flying",
    attack: 9,
    cooldown: 0.75
  },
  "zen-headbutt": {
    name: "Zen Headbutt",
    moveType: "quick",
    type: "psychic",
    attack: 12,
    cooldown: 1.05
  },
  // charge moves
  "aerial-ace": {
    name: "Aerial Ace",
    moveType: "charge",
    type: "flying",
    charges: 4,
    cooldown: 2.9,
    dodge: 0.6,
    critical: 0.05,
    attack: 30
  },
  "air-cutter": {
    name: "Air Cutter",
    moveType: "charge",
    type: "flying",
    charges: 4,
    cooldown: 3.3,
    dodge: 0.9,
    critical: 0.25,
    attack: 30
  },
  "ancient-power": {
    name: "Ancient Power",
    moveType: "charge",
    type: "rock",
    charges: 4,
    cooldown: 3.6,
    dodge: 0.35,
    critical: 0.05,
    attack: 35
  },
  "aqua-jet": {
    name: "Aqua Jet",
    moveType: "charge",
    type: "water",
    charges: 5,
    cooldown: 2.35,
    dodge: 0.4,
    critical: 0.05,
    attack: 25
  },
  "aqua-tail": {
    name: "Aqua Tail",
    moveType: "charge",
    type: "water",
    charges: 2,
    cooldown: 2.35,
    dodge: 0.2,
    critical: 0.05,
    attack: 45
  },
  "blizzard": {
    name: "Blizzard",
    moveType: "charge",
    type: "ice",
    charges: 1,
    cooldown: 3.9,
    dodge: 0,
    critical: 0.05,
    attack: 100
  },
  "body-slam": {
    name: "Body Slam",
    moveType: "charge",
    type: "normal",
    charges: 2,
    cooldown: 1.56,
    dodge: 0.2,
    critical: 0.05,
    attack: 40
  },
  "bone-club": {
    name: "Bone Club",
    moveType: "charge",
    type: "ground",
    charges: 4,
    cooldown: 1.6,
    dodge: 0.4,
    critical: 0.25,
    attack: 30
  },
  "brick-break": {
    name: "Brick Break",
    moveType: "charge",
    type: "fighting",
    charges: 3,
    cooldown: 1.6,
    dodge: 0.4,
    critical: 0.25,
    attack: 25
  },
  "brine": {
    name: "Brine",
    moveType: "charge",
    type: "water",
    charges: 4,
    cooldown: 2.4,
    dodge: 0.35,
    critical: 0.05,
    attack: 25
  },
  "bubble-beam": {
    name: "Bubble Beam",
    moveType: "charge",
    type: "water",
    charges: 4,
    cooldown: 2.9,
    dodge: 0.2,
    critical: 0.05,
    attack: 30
  },
  "bug-buzz": {
    name: "Bug Buzz",
    moveType: "charge",
    type: "bug",
    charges: 2,
    cooldown: 4.25,
    dodge: 1.5,
    critical: 0.05,
    attack: 75
  },
  "bulldoze": {
    name: "Bulldoze",
    moveType: "charge",
    type: "ground",
    charges: 4,
    cooldown: 3.4,
    dodge: 1.1,
    critical: 0.05,
    attack: 35
  },
  "cross-chop": {
    name: "Cross Chop",
    moveType: "charge",
    type: "fighting",
    charges: 1,
    cooldown: 2,
    dodge: 0.3,
    critical: 0.25,
    attack: 60
  },
  "cross-poison": {
    name: "Cross Poison",
    moveType: "charge",
    type: "poison",
    charges: 4,
    cooldown: 1.5,
    dodge: 0.3,
    critical: 0.25,
    attack: 25
  },
  "dark-pulse": {
    name: "Dark Pulse",
    moveType: "charge",
    type: "dark",
    charges: 3,
    cooldown: 3.5,
    dodge: 1.1,
    critical: 0.05,
    attack: 45
  },
  "dazzling-gleam": {
    name: "Dazzling Gleam",
    moveType: "charge",
    type: "fairy",
    charges: 3,
    cooldown: 4.2,
    dodge: 0.8,
    critical: 0.05,
    attack: 55
  },
  "dig": {
    name: "Dig",
    moveType: "charge",
    type: "ground",
    charges: 3,
    cooldown: 5.8,
    dodge: 0.4,
    critical: 0.05,
    attack: 70
  },
  "disarming-voice": {
    name: "Disarming Voice",
    moveType: "charge",
    type: "fairy",
    charges: 5,
    cooldown: 3.9,
    dodge: 1.8,
    critical: 0.05,
    attack: 25
  },
  "discharge": {
    name: "Discharge",
    moveType: "charge",
    type: "electric",
    charges: 3,
    cooldown: 2.5,
    dodge: 0.7,
    critical: 0.05,
    attack: 35
  },
  "dragon-claw": {
    name: "Dragon Claw",
    moveType: "charge",
    type: "dragon",
    charges: 2,
    cooldown: 1.6,
    dodge: 0.2,
    critical: 0.25,
    attack: 35
  },
  "dragon-pulse": {
    name: "Dragon Pulse",
    moveType: "charge",
    type: "dragon",
    charges: 2,
    cooldown: 3.6,
    dodge: 1.2,
    critical: 0.05,
    attack: 65
  },
  "draining-kiss": {
    name: "Draining Kiss",
    moveType: "charge",
    type: "fairy",
    charges: 5,
    cooldown: 2.8,
    dodge: 0.1,
    critical: 0.05,
    attack: 25
  },
  "drill-peck": {
    name: "Drill Peck",
    moveType: "charge",
    type: "flying",
    charges: 3,
    cooldown: 2.7,
    dodge: 0.9,
    critical: 0.05,
    attack: 40
  },
  "drill-run": {
    name: "Drill Run",
    moveType: "charge",
    type: "ground",
    charges: 3,
    cooldown: 3.4,
    dodge: 0.7,
    critical: 0.25,
    attack: 50
  },
  "earthquake": {
    name: "Earthquake",
    moveType: "charge",
    type: "ground",
    charges: 1,
    cooldown: 4.2,
    dodge: 1.95,
    critical: 0.05,
    attack: 100
  },
  "fire-blast": {
    name: "Fire Blast",
    moveType: "charge",
    type: "fire",
    charges: 1,
    cooldown: 4.1,
    dodge: 0.4,
    critical: 0.05,
    attack: 100
  },
  "fire-punch": {
    name: "Fire Punch",
    moveType: "charge",
    type: "fire",
    charges: 3,
    cooldown: 2.8,
    dodge: 0.51,
    critical: 0.05,
    attack: 40
  },
  "flame-burst": {
    name: "Flame Burst",
    moveType: "charge",
    type: "fire",
    charges: 4,
    cooldown: 2.1,
    dodge: 0.2,
    critical: 0.05,
    attack: 30
  },
  "flame-charge": {
    name: "Flame Charge",
    moveType: "charge",
    type: "fire",
    charges: 5,
    cooldown: 3.1,
    dodge: 0.2,
    critical: 0.05,
    attack: 25
  },
  "flame-wheel": {
    name: "Flame Wheel",
    moveType: "charge",
    type: "fire",
    charges: 4,
    cooldown: 4.6,
    dodge: 0.5,
    critical: 0.05,
    attack: 40
  },
  "flamethrower": {
    name: "Flamethrower",
    moveType: "charge",
    type: "fire",
    charges: 2,
    cooldown: 2.9,
    dodge: 0.9,
    critical: 0.05,
    attack: 55
  },
  "flash-cannon": {
    name: "Flash Cannon",
    moveType: "charge",
    type: "steel",
    charges: 3,
    cooldown: 3.9,
    dodge: 1.1,
    critical: 0.05,
    attack: 60
  },
  "gunk-shot": {
    name: "Gunk Shot",
    moveType: "charge",
    type: "poison",
    charges: 1,
    cooldown: 3,
    dodge: 0.4,
    critical: 0.05,
    attack: 65
  },
  "heat-wave": {
    name: "Heat Wave",
    moveType: "charge",
    type: "fire",
    charges: 1,
    cooldown: 3.8,
    dodge: 0.4,
    critical: 0.05,
    attack: 80
  },
  "horn-attack": {
    name: "Horn Attack",
    moveType: "charge",
    type: "normal",
    charges: 4,
    cooldown: 2.2,
    dodge: 0.3,
    critical: 0.05,
    attack: 25
  },
  "hurricane": {
    name: "Hurricane",
    moveType: "charge",
    type: "flying",
    charges: 1,
    cooldown: 3.2,
    dodge: 1.77,
    critical: 0.05,
    attack: 80
  },
  "hydro-pump": {
    name: "Hydro Pump",
    moveType: "charge",
    type: "water",
    charges: 1,
    cooldown: 3.8,
    dodge: 2.1,
    critical: 0.05,
    attack: 90
  },
  "hyper-beam": {
    name: "Hyper Beam",
    moveType: "charge",
    type: "normal",
    charges: 1,
    cooldown: 5,
    dodge: 0.8,
    critical: 0.05,
    attack: 120
  },
  "hyper-fang": {
    name: "Hyper Fang",
    moveType: "charge",
    type: "normal",
    charges: 3,
    cooldown: 2.1,
    dodge: 0.3,
    critical: 0.05,
    attack: 35
  },
  "ice-beam": {
    name: "Ice Beam",
    moveType: "charge",
    type: "ice",
    charges: 2,
    cooldown: 3.65,
    dodge: 1.35,
    critical: 0.05,
    attack: 65
  },
  "ice-punch": {
    name: "Ice Punch",
    moveType: "charge",
    type: "ice",
    charges: 3,
    cooldown: 3.5,
    dodge: 1.1,
    critical: 0.05,
    attack: 45
  },
  "icy-wind": {
    name: "Icy Wind",
    moveType: "charge",
    type: "ice",
    charges: 5,
    cooldown: 3.8,
    dodge: 0.7,
    critical: 0.05,
    attack: 25
  },
  "iron-head": {
    name: "Iron Head",
    moveType: "charge",
    type: "steel",
    charges: 2,
    cooldown: 2,
    dodge: 0.25,
    critical: 0.05,
    attack: 30
  },
  "leaf-blade": {
    name: "Leaf Blade",
    moveType: "charge",
    type: "grass",
    charges: 2,
    cooldown: 2.8,
    dodge: 1,
    critical: 0.25,
    attack: 55
  },
  "low-sweep": {
    name: "Low Sweep",
    moveType: "charge",
    type: "fighting",
    charges: 4,
    cooldown: 2.25,
    dodge: 0.15,
    critical: 0.05,
    attack: 30
  },
  "magnet-bomb": {
    name: "Magnet Bomb",
    moveType: "charge",
    type: "steel",
    charges: 4,
    cooldown: 2.8,
    dodge: 0.55,
    critical: 0.05,
    attack: 30
  },
  "megahorn": {
    name: "Megahorn",
    moveType: "charge",
    type: "bug",
    charges: 1,
    cooldown: 3.2,
    dodge: 0.3,
    critical: 0.05,
    attack: 80
  },
  "moonblast": {
    name: "Moonblast",
    moveType: "charge",
    type: "fairy",
    charges: 1,
    cooldown: 4.1,
    dodge: 0.6,
    critical: 0.05,
    attack: 85
  },
  "mud-bomb": {
    name: "Mud Bomb",
    moveType: "charge",
    type: "ground",
    charges: 4,
    cooldown: 2.6,
    dodge: 0.45,
    critical: 0.05,
    attack: 30
  },
  "night-slash": {
    name: "Night Slash",
    moveType: "charge",
    type: "dark",
    charges: 4,
    cooldown: 2.7,
    dodge: 0.2,
    critical: 0.25,
    attack: 30
  },
  "ominous-wind": {
    name: "Ominous Wind",
    moveType: "charge",
    type: "ghost",
    charges: 4,
    cooldown: 3.1,
    dodge: 0.25,
    critical: 0.05,
    attack: 30
  },
  "petal-blizzard": {
    name: "Petal Blizzard",
    moveType: "charge",
    type: "grass",
    charges: 2,
    cooldown: 3.2,
    dodge: 1,
    critical: 0.05,
    attack: 65
  },
  "play-rough": {
    name: "Play Rough",
    moveType: "charge",
    type: "fairy",
    charges: 2,
    cooldown: 2.9,
    dodge: 1.3,
    critical: 0.05,
    attack: 55
  },
  "poison-fang": {
    name: "Poison Fang",
    moveType: "charge",
    type: "poison",
    charges: 5,
    cooldown: 2.4,
    dodge: 0.2,
    critical: 0.05,
    attack: 25
  },
  "power-gem": {
    name: "Power Gem",
    moveType: "charge",
    type: "rock",
    charges: 3,
    cooldown: 2.9,
    dodge: 0.8,
    critical: 0.05,
    attack: 40
  },
  "power-whip": {
    name: "Power Whip",
    moveType: "charge",
    type: "grass",
    charges: 1,
    cooldown: 2.8,
    dodge: 1.3,
    critical: 0.25,
    attack: 70
  },
  "psybeam": {
    name: "Psybeam",
    moveType: "charge",
    type: "psychic",
    charges: 4,
    cooldown: 3.88,
    dodge: 1.3,
    critical: 0.05,
    attack: 40
  },
  "psychic": {
    name: "Psychic",
    moveType: "charge",
    type: "psychic",
    charges: 2,
    cooldown: 2.8,
    dodge: 1.2,
    critical: 0.05,
    attack: 55
  },
  "psyshock": {
    name: "Psyshock",
    moveType: "charge",
    type: "psychic",
    charges: 3,
    cooldown: 2.7,
    dodge: 0.5,
    critical: 0.05,
    attack: 40
  },
  "rock-slide": {
    name: "Rock Slide",
    moveType: "charge",
    type: "rock",
    charges: 3,
    cooldown: 3.2,
    dodge: 1.4,
    critical: 0.05,
    attack: 50
  },
  "rock-tomb": {
    name: "Rock Tomb",
    moveType: "charge",
    type: "rock",
    charges: 3,
    cooldown: 3.4,
    dodge: 0.9,
    critical: 0.25,
    attack: 30
  },
  "scald": {
    name: "Scald",
    moveType: "charge",
    type: "water",
    charges: 3,
    cooldown: 4,
    dodge: 2.1,
    critical: 0.05,
    attack: 55
  },
  "seed-bomb": {
    name: "Seed Bomb",
    moveType: "charge",
    type: "bug",
    charges: 3,
    cooldown: 2.4,
    dodge: 0.5,
    critical: 0.05,
    attack: 40
  },
  "shadow-ball": {
    name: "Shadow Ball",
    moveType: "charge",
    type: "ghost",
    charges: 3,
    cooldown: 3.08,
    dodge: 0.3,
    critical: 0.05,
    attack: 45
  },
  "signal-beam": {
    name: "Signal Beam",
    moveType: "charge",
    type: "bug",
    charges: 3,
    cooldown: 3.1,
    dodge: 1,
    critical: 0.05,
    attack: 45
  },
  "sludge": {
    name: "Sludge",
    moveType: "charge",
    type: "poison",
    charges: 4,
    cooldown: 2.6,
    dodge: 0.5,
    critical: 0.05,
    attack: 30
  },
  "sludge-bomb": {
    name: "Sludge Bomb",
    moveType: "charge",
    type: "poison",
    charges: 2,
    cooldown: 2.6,
    dodge: 0.5,
    critical: 0.05,
    attack: 55
  },
  "sludge-wave": {
    name: "Sludge Wave",
    moveType: "charge",
    type: "poison",
    charges: 1,
    cooldown: 3.4,
    dodge: 0.9,
    critical: 0.05,
    attack: 70
  },
  "solar-beam": {
    name: "Solar Beam",
    moveType: "charge",
    type: "grass",
    charges: 1,
    cooldown: 4.9,
    dodge: 1.7,
    critical: 0.05,
    attack: 120
  },
  "stomp": {
    name: "Stomp",
    moveType: "charge",
    type: "normal",
    charges: 4,
    cooldown: 2.1,
    dodge: 0.7,
    critical: 0.05,
    attack: 30
  },
  "stone-edge": {
    name: "Stone Edge",
    moveType: "charge",
    type: "rock",
    charges: 1,
    cooldown: 3.1,
    dodge: 0.4,
    critical: 0.05,
    attack: 80
  },
  "struggle": {
    name: "Struggle",
    moveType: "charge",
    type: "normal",
    charges: 5,
    cooldown: 1.7,
    dodge: 0.7,
    critical: 0.05,
    attack: 15
  },
  "submission": {
    name: "Submission",
    moveType: "charge",
    type: "fighting",
    charges: 3,
    cooldown: 2.1,
    dodge: 0.15,
    critical: 0.05,
    attack: 30
  },
  "swift": {
    name: "Swift",
    moveType: "charge",
    type: "normal",
    charges: 4,
    cooldown: 3,
    dodge: 0.5,
    critical: 0.05,
    attack: 30
  },
  "thunder": {
    name: "Thunder",
    moveType: "charge",
    type: "electric",
    charges: 1,
    cooldown: 4.3,
    dodge: 1.55,
    critical: 0.05,
    attack: 100
  },
  "thunder-punch": {
    name: "Thunder Punch",
    moveType: "charge",
    type: "electric",
    charges: 3,
    cooldown: 2.4,
    dodge: 0.25,
    critical: 0.05,
    attack: 40
  },
  "thunderbolt": {
    name: "Thunderbolt",
    moveType: "charge",
    type: "electric",
    charges: 2,
    cooldown: 2.7,
    dodge: 0.8,
    critical: 0.05,
    attack: 55
  },
  "twister": {
    name: "Twister",
    moveType: "charge",
    type: "dragon",
    charges: 5,
    cooldown: 2.7,
    dodge: 1.75,
    critical: 0.05,
    attack: 25
  },
  "vice-grip": {
    name: "Vice Grip",
    moveType: "charge",
    type: "normal",
    charges: 5,
    cooldown: 2.1,
    dodge: 0.25,
    critical: 0.05,
    attack: 25
  },
  "water-pulse": {
    name: "Water Pulse",
    moveType: "charge",
    type: "water",
    charges: 4,
    cooldown: 3.3,
    dodge: 1,
    critical: 0.05,
    attack: 35
  },
  "wrap": {
    name: "Wrap",
    moveType: "charge",
    type: "normal",
    charges: 5,
    cooldown: 4,
    dodge: 0.6,
    critical: 0.05,
    attack: 25
  },
  "x-scissor": {
    name: "X-Scissor",
    moveType: "charge",
    type: "bug",
    charges: 3,
    cooldown: 2.1,
    dodge: 0.25,
    critical: 0.05,
    attack: 35
  }
};
