/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = new Map();
  return function (...args) {
    let key = args;
    console.log("Key:", key); // Log the key
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let ans = fn(...args);
      cache.set(key, ans);
      return ans;
    }
  };
}

// Define a function 'sum' and create a memoized version 'memoizedSum'
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

// First call with (2, 2) - not in cache, so it calls 'sum' and stores the result in the cache
memoizedSum(2, 2); // "call" - returns 4

// Second call with (2, 2) - in cache, so it directly returns the cached result
memoizedSum(2, 2); // "call" - returns 4

// Get the call count - total call count so far: 1
console.log(memoizedSum.getCallCount()); // "getCallCount" - total call count: 1

// Third call with (1, 2) - not in cache, so it calls 'sum' and stores the result in the cache
memoizedSum(1, 2); // "call" - returns 3

// Get the call count - total call count so far: 2
console.log(memoizedSum.getCallCount()); // "getCallCount" - total call count: 2
