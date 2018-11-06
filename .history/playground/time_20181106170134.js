var moment = require('moment');

// Jan 1st 1970 00:00:10 am epoch unix

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());

var date = moment();
date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('DD MM YYYY')); //05 02 2118
// console.log(date.format('DD MMM YYYY')); //05 Feb 2118
console.log(date.format('MMM Do, YYYY')); //Feb 5th, 2118

// 10:35 am
// 6:01 am

// var date = moment();
// console.log(date.format('h:mm a'))