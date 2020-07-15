const getNotes = require('./notes');
const validator = require('validator');

console.log(getNotes());

console.log(validator.isEmail('sks@yah.com'));
