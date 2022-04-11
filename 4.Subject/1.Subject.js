const { Subject, from } = require('rxjs');

const subject = new Subject();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(1);
subject.next(2);

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2

/* ---------------------------------------------------- */

// Since a Subject is an Observer, this also means you may provide a Subject
// as the argument to the subscribe of any Observable, like the example below shows:

const subject2 = new Subject();

subject2.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject2.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

const observable = from([1, 2, 3]);

observable.subscribe(subject2); // You can subscribe providing a Subject

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3
