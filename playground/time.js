const moment = require('moment');

// var date = new Date();

// var months = ['Jan', 'Feb'];

// console.log(date.getMonth());

var date = moment();

date.add(1, 'days').subtract(3, 'years');

console.log(date.format('MMM Do, YYYY'));

var createAt = 1234;
var date2 = moment(createAt);

console.log(date2.format('h:mm a'));
console.log(moment().valueOf());
