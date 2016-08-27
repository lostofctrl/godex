# godex.js
The godex is a javascript library full of Pokemon Go data.   
_Note: `v1.3.3` and below will break when upgraded to `v1.4.0`_.  
_This is due to all get methods being absorbed into `get`_.

---

### Build

Requirements: `gulp`, `gulp-concat`, `gulp-minify`.
If you have these installed globally, you're set. If not, run `npm install` inside the root directory.

To build:
```
$ cd /path/to/godex
$ gulp
```

---

### Install
##### Bower   
```
$ cd your/app/directory
$ bower install godex --save
```
##### NPM
```
$ cd your/app/directory
$ npm install godex --save
```
##### Download
Alternatively, download the repo and use the files that way!

---

### Useage

##### Browser
```
<script src="/path/to/godex.min.js"></script>
```
Add script before your other scripts in your HTML. Exports as `dex`.

##### Node
`var dex = require('godex');`

---

### Methods
_Variables passed in [] are optional._

##### `dex.get([location], thing)`
This is the master fetch function. It will get you anything! You can pass a pokemon id, name, or key to get a pokemon. Alternatively, specify the thing you're looking for to retrieve that as well. You can also use the "all" specifier to retrieve all of whatever it is you're looking for.

```
// Fetch pokemon
dex.get("Bulbasaur");
dex.get(1);
dex.get("1");
dex.get(001);
dex.get("001");

// Fetch other data
dex.get("type", "bug");
dex.get("move", "Twister");

// Fetch nested data!
dex.get("pokemon.type", "bug");

// Note: nested data only works
// if the subproperty exists!!
```

##### `dex.appraise(options)`   
This method returns the IV's of your pokemon!

```
dex.appraise({
  pokemon: 'Aerodactyl',
  cp: 1495,
  hp: 113,
  dust: 3500,
  powered: true,    // powered up?
  strongAtk: false, // Gym Leader says "x" is
  strongDef: true,  // your poke's best stat,
  strongHP: false   // send that as true.
})
```

---

### Gym Methods
You can initiate a new gym with `var gym = new dex.gym();`

##### `gym.add('Bulbasaur')`
Adds a pokemon to the gym.

##### `gym.remove('Bulbasaur')`
Removes a pokemon from the gym.

##### `gym.types()`
Returns all the types for the pokemon in the gym

##### `gym.unmodified()`
Returns the types that aren't affected by the gym.

##### `gym.offense(sort)`
Returns the offensive capabilities of the gym. `sort = true` to reverse

##### `gym.defense(sort)`
Returns the defensive capabilities of the gym. `sort = true` to reverse

---

### Contribute

Fork me and open up a pull request, or just shoot me an email - me [at] yayramen.com - I'd love the help!   
Version guide:

- +0.0.1 for patches/minor things
- +0.1.0 for new feature
- +1.0.0 for something drastic!


---


### Contributors

- [xssc](https://github.com/xssc)

---

### Built with godex

- [pogoto](http://pogo.to) - gym information tool
