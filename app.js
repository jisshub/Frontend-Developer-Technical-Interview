console.log('a')
setTimeout(() => {
   console.log('set') 
}, 0);
Promise.resolve(() => console.log("pro")).then(res => res());
console.log('b')

// a
// b
// pro
// set

// setTimeOut is not part of javascript, it is part of web apis. it runs after other js codes in our files are executed.

// Even though timeout is 0s, It stills runs after all js codes are executed.

