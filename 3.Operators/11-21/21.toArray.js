// Collects all source emissions and emits them as an array when the source completes
const { interval } = require('rxjs');
const { toArray, take } = require('rxjs/operators');

interval(100)
  .pipe(take(10), toArray())
  .subscribe(console.log);

// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]