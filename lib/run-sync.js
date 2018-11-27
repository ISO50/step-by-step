'use strict';

/**
 * This function iterates over an array of promise factories
 */
function runSync(arr = []) {

  if (!Array.isArray(arr)) {
    return Promise.resolve();
  }

  const results = [];

  const reducedPromises = 
    arr.reduce((promise, next) => {

      return promise
        .then(result => results.push(result))
        .then(next);
    }, Promise.resolve())
      .then(lastResult => {
        return [...results, lastResult].splice(1, results.length);
      });

  return reducedPromises;
}

module.exports = {
  runSync
};
