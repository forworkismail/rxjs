// Emit value on the leading edge of an interval, but suppress new values until durationSelector has completed
const { interval } = require('rxjs');
const { throttle } = require('rxjs/operators');

//emit value every 1 second
const source = interval(1000);
//throttle for 2 seconds, emit latest value
const example = source.pipe(throttle(val => interval(2000)));
//output: 0...3...6...9
const subscribe = example.subscribe(val => console.log(val));