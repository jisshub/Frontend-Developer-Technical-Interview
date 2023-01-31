function computers(name) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(name)
        }, 2000);
    })
}

Promise.all([
    computers('dell'),
    Promise.resolve('hello'),
    // Promise.reject('bad luck')
]).then(value=>console.lo   g(value))

// Promise.all() takes an array of promises which resolve and reject.

