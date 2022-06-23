const shortBubbleSort = require('../..').Sorting.shortBubbleSort;
const sortingTestsHelper = require('./sorting_tests_helper.test.spec');

describe('Short Bubble Sort', () => {
  it('sorts the given array', () => {
    sortingTestsHelper.testSort(shortBubbleSort);
  });

  it('sorts the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(shortBubbleSort);
  });
});
