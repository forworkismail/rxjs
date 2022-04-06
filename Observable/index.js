const { Observable } = require('rxjs');

const observable = Observable.create((observer) => {
  try {
    observer.next('Hello World!')
		observer.next('I am number 2') // next value
    observer.next({ name: 'John' }) // next value
    observer.complete() // complete
  } catch (error) {
    observer.error('I am number 3') // throw error
  }
})

// subscribing to an observable
observable.subscribe((message) => {
    console.log(message);
})