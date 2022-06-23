// Pass a function that use a closure to memoize calculated values
const memoize = (fn) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
	cache[n] = fn(n);
    return cache[n];
  };
};
//~~~~~~~~~~~~~~Usage~~~~~~~~~~~~~~
const times10 = (n) => n * 10;
const memoizedTimes10 = memoize(times10);
console.log("Task 4 calculated value:", memoizedTimes10(9)); // calculated
console.log("Task 4 cached value:", memoizedTimes10(9)); // cached
