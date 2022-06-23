const heapSort = require('../..').Sorting.heapSort;
const sortingTestsHelper = require('./sorting_tests_helper.test.spec');

describe('Heap Sort', () => {
  it('sorts the given array', () => {
    sortingTestsHelper.testSort(heapSort);
  });

  it('sorts the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(heapSort);
  });
});
