var moment = require('moment');

<<<<<<< HEAD
// Jan 1st 1970 00:00:10 am
=======
// Jan 1st 1970 00:00:10 am epoch unix
>>>>>>> b13f940b3d21fa0489b43282316cd1e7dfeb94e3

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());

<<<<<<< HEAD
// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));
=======
var date = moment();
date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('DD MM YYYY')); //05 02 2118
// console.log(date.format('DD MMM YYYY')); //05 Feb 2118
console.log(date.format('MMM Do, YYYY')); //Feb 5th, 2118
>>>>>>> b13f940b3d21fa0489b43282316cd1e7dfeb94e3

// 10:35 am
// 6:01 am

<<<<<<< HEAD
var someTimestamp = moment().valueOf();
console.log(someTimestamp)

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))
=======
// var date = moment();
// console.log(date.format('h:mm a'))
>>>>>>> b13f940b3d21fa0489b43282316cd1e7dfeb94e3
