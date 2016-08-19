var dex = require('./godex'),
  log = function(message, data) {
    message = "GoDex: " + message;
    if (data) console.log(message, data);
    else console.log(message);
  },
  check = function(data) {
    return { 
      info: data ? "Success" : "Error",
      data: data
    };
  };

log("Testing with dex.get('Bulbasaur')", check(dex.get('Bulbasaur')));

log("Testing with dex.getType('Bug')", check(dex.getType('Bug')));

log("Testing with dex.getMove('Twister')", check(dex.getMove('Twister')));

log("Testing with dex.byType('Bug')", check(dex.byType('Bug')));
