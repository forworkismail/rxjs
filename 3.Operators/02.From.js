// from operator in rxjs is used to convert an array, promise, iterable, or observable into an observable.
const { from } = require('rxjs');

//emit array as a sequence of values
const arraySource = from([1, 2, 3, 4, 5]);
//output: 1,2,3,4,5
const subscribeArray = arraySource.subscribe(val => console.log(val));
/* ------------------------------------------------------------------------------------------------ */


//emit result of promise
const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
//output: 'Hello World'
const subscribePromise = promiseSource.subscribe(val => console.log(val));
/* ------------------------------------------------------------------------------------------------ */


//works on js collections
const map = new Map();
map.set(1, 'Hi');
map.set(2, 'Bye');

const mapSource = from(map);
//output: [1, 'Hi'], [2, 'Bye']
const subscribeMap = mapSource.subscribe(val => console.log(val));
/* ------------------------------------------------------------------------------------------------ */


//emit string as a sequence
const source = from('Hello World');
//output: 'H','e','l','l','o',' ','W','o','r','l','d'
const subscribeString = source.subscribe(val => console.log(val));