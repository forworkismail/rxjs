// Emit the first value or first to pass provided expression
const { from } = require('rxjs');
const { first } = require('rxjs/operators');

const source1 = from([1, 2, 3, 4, 5]);
//no arguments, emit first value
const example1 = source1.pipe(first());
//output: "First value: 1"
const subscribe1 = example1.subscribe(val => console.log(`First value: ${val}`));
/* ------------------------------------------------------------------------------------------------ */


const source2 = from([1, 2, 3, 4, 5]);
//emit first item to pass test
const example2 = source2.pipe(first(num => num === 5));
//output: "First to pass test: 5"
const subscribe2 = example2.subscribe(val =>
  console.log(`First to pass test: ${val}`)
);