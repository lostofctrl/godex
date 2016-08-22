/*
  types.js
  godex - list of pokemon types
*/

var types = {
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
