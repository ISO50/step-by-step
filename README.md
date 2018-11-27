# step-by-step

A simple way to execute a group of ES6 promises in a synchronous manner.


## How to use

In this example a synthetic `Promise` is used to show how `runSync` works.
The input array for runSync should contain functions which return the Promises that will be executed in a synchronous way.

```javascript
const runSync = require('step-by-step').runSync;

const createPromise = (param) => {
  return () => {
    return new Promise(resolve => {

      const [planet, stopFor] = param;

      setTimeout(() => {
        console.log(planet);
        resolve(planet);
      }, stopFor);
    });
  };
};

const promiseArray = [
  createPromise(['Mercury', 220]),
  createPromise(['Venus', 100]),
  createPromise(['Earth', 1]),
  createPromise(['Mars', 150])
];

// Output: Mercury, Venus, Earth, Mars
const results = runSync(promiseArray);

// Output: [ 'Mercury', 'Venus', 'Earth', 'Mars' ]
results.then(console.log);
```

Looks a bit bulky? If all the promise factory related stuff is left out it looks way cleaner:

```javascript
const runSync = require('step-by-step').runSync;

const promises = [
  () => fetch('http://a'),
  () => fetch('http://b'),
  () => fetch('http://c')
];

runSync(promises);
```

## Changelog

* `1.0.8` - updated dev dependencies
* `1.0.6` - changed typings
* `1.0.4` - fix wrong export 😀
* `1.0.2` - add typings see #1
