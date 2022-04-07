// Will make an ajax request for a given url
// and return the response.

const { ajax } = require('rxjs/ajax');
const { map } = require('rxjs/operators');

const final_value$ = ajax('https://jsonplaceholder.typicode.com/users').pipe(
  map(res => console.log(res.response))
);

final_value$.subscribe((x) => console.log(x));
