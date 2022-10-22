// Thought experiment: What if you have a local variable inside a function that you
// don’t want any other parts of your code to have access to, but you would also like to
// keep its value for the next time the function is called? Why? Perhaps because you
// want a counter to track how many times a function is called. The solution is to
// declare a static variable in some languages but in JS it would be called a closure.
// A closure is a function having access to the parent scope, even after the parent function has closed.


// Pass a function that uses a closure to memoize calculated values
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
const times10 = (n) => n * 10; //function to be memoized
const memoizedTimes10 = memoize(times10);
console.log("Task 4 calculated value:", memoizedTimes10(9)); // calculated
console.log("Task 4 cached value:", memoizedTimes10(9)); // cached
