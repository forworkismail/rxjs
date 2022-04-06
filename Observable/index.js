const { Observable } = require('rxjs');

const observable = Observable.create((observer) => {
    observer.next('Hello World!')
		observer.next('I am number 2') // next value
    // observer.error('I am number 3') // throw error
    observer.complete('I am number 4') // complete
})

// subscribing to an observable
observable.subscribe((message) => {
    console.log(message);
})