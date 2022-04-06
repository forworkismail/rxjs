const { of } = require('rxjs');
const { filter, reduce } = require('rxjs/operators');

let testingObeservable$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let observable$ = testingObeservable$.pipe(
  filter(value => value % 2 === 0),
  reduce((acc, value) => acc + value, 0)
);

observable$.subscribe((x) => { console.log(x); });