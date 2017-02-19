'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const runSync = require('../lib/run-sync').runSync;

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('#runSync', () => {

  const createPromise = (param) => {
    return () => {
      return new Promise(resolve => {

        const [nr, stopFor] = param;

        setTimeout(() => {
          resolve(nr);
        }, stopFor);
      });
    };
  };

  it('should run in the right order', () => {

    // given
    const testData = [
      [1, 80],
      [2, 200],
      [3, 10],
      [4, 60]
    ];

    const promiseFactoryArr = testData.map(data => {
      return createPromise(data);
    });

    // when
    const result = runSync(promiseFactoryArr);

    // then
    return expect(result).to.eventually.become([1, 2, 3, 4]);
  });

  it('should return empty array on empty input array', () => {

    // given
    const emptyArray = [];

    // when
    const result = runSync(emptyArray);

    // then
    return expect(result).to.eventually.become([]);
  });

  it('should return empty array on undefined input array', () => {

    // when
    const result = runSync();

    // then
    return expect(result).to.eventually.become([]);
  });

  xit('should handle promise rejections', () => {
    // TODO
  });

  it('should not fail on non Array input', () => {

    // given
    const testData = '';

    // when
    const result = runSync(testData);

    // then
    return expect(result).to.eventually.become();
  });

  it('should not fail if last item is undefined', () => {

    // given
    const testData = [
      [1, 80],
      [2, 200],
      [3, 10],
      [undefined, 60]
    ];

    const promiseFactoryArr = testData.map(data => {
      return createPromise(data);
    });

    // when
    const result = runSync(promiseFactoryArr);

    // then
    return expect(result).to.eventually.become([1, 2, 3, undefined]);
  });
});
