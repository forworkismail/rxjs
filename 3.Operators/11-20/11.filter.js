const { from, interval } = require('rxjs');
const { filter } = require('rxjs/operators');

//emit (1,2,3,4,5)
const source1 = from([1, 2, 3, 4, 5]);
//filter out non-even numbers
const example1 = source1.pipe(filter(num => num % 2 === 0));
//output: "Even number: 2", "Even number: 4"
const subscribe1 = example1.subscribe(val => console.log(`Even number: ${val}`));

/* ------------------------------------------------------------------------------------------------ */


//emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
const source2 = from([
  { name: 'Joe', age: 31 },
  { name: 'Bob', age: 25 }
]);
//filter out people with age under 30
const example2 = source2.pipe(filter(person => person.age >= 30));
//output: "Over 30: Joe"
const subscribe2 = example2.subscribe(val => console.log(`Over 30: ${val.name}`));

/* ------------------------------------------------------------------------------------------------ */


//emit every second
const source3 = interval(1000);
//filter out all values until interval is greater than 5
const example3 = source3.pipe(filter(num => num > 5));
/*
  "Number greater than 5: 6"
  "Number greater than 5: 7"
  "Number greater than 5: 8"
  "Number greater than 5: 9"
*/
const subscribe3 = example3.subscribe(val =>
  console.log(`Number greater than 5: ${val}`)
);