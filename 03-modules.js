// Modules
// every file is module
// encapusalted code
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');


sayHi('andrei');
sayHi(names.andrei);
sayHi(names.radu);