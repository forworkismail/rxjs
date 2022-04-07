// Counts the number of emissions on the source and emits that number when the source completes.
const { range } = require('rxjs');
const { count } = require('rxjs/operators');

const numbers = range(1, 7);
const result = numbers.pipe(count(i => i % 2 === 1));
result.subscribe(x => console.log(x));
// Results in:
// 4