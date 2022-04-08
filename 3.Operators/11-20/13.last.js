// Emit the last value emitted from source on completion, based on provided expression
const { from } = require('rxjs');
const { last } = require('rxjs/operators');

const source1 = from([1, 2, 3, 4, 5]);
//no arguments, emit last value
const example1 = source1.pipe(last());
//output: "Last value: 5"
const subscribe = example1.subscribe(val => console.log(`Last value: ${val}`));
/*------------------------------------------------------------------------------------------------*/


const source2 = from([1, 2, 3, 4, 5]);
//emit last even number
const exampleTwo = source2.pipe(last(num => num % 2 === 0));
//output: "Last to pass test: 4"
const subscribeTwo = exampleTwo.subscribe(val =>
  console.log(`Last to pass test: ${val}`)
);
