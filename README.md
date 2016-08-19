# godex.js
The godex is a javascript library full of Pokemon Go data.

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
##### `dex.get('Bulbasaur')`
Returns Pokemon object. Search by name. For Nidoran, use `f` and `m` in place of gender markers.   
Search by key for best results: `Mr. Mime` becomes `mr-mime`

##### `dex.getType('bug')`
Returns type object. Contains effectiveness details.

##### `dex.getMove('Twister')`
Returns move object. Contains damage/charges/cooldown/dodge window

##### `dex.list(alpha)`
Retuns a basic list of all Pokemon names. `alpha = true` to alphebetize.

##### `dex.listTypes(alpha)`
Retuns a basic list of all Pokemon types. `alpha = true` to alphebetize.

##### `dex.listMoves(alpha)`
Retuns a basic list of all Pokemon moves. `alpha = true` to alphebetize.

##### `dex.byType('poison')`
Retuns a list of all pokemon with a given type.

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
Retuns the types that aren't affected by the gym.

##### `gym.offense(sort)`
Returns the offensive capabilities of the gym. `sort = true` to reverse

##### `gym.defense(sort)`
Returns the defensive capabilities of the gym. `sort = true` to reverse

---

### Contribute

Fork me, open up a pull request, shoot me an email - me [at] yayramen.com - I'd love the help!

---

### Built with godex

- [pogoto](http://pogo.to) - gym information tool
