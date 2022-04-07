const { of } = require('rxjs');
const { max } = require('rxjs/operators')

of(5, 4, 7, 2, 8).pipe(
  max(),
)
.subscribe(x => console.log(x)); // -> 8