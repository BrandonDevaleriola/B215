


  const show = (num) => {
	const makeRandomArrayFromSize = (number) => {
		return [
		  ...[...Array(number).keys()].map((el, _, arr) => {
			return Math.floor(Math.random() *(el + 1 * arr.length)); // 1 to max array length for range
		  }),
		];
	  };

	const arr = makeRandomArrayFromSize(num)
	const unsortedArr = [...arr] //new unsorted array
	const sortedArr = [...arr.sort(function(a, b) {return a - b})] //new sorted array
	const markerNameA = "example-marker-a";
	const markerNameB = "example-marker-b";
	const measureab = "measure a to b";

	const markerNameC = "example-marker-c";
	const markerNameD = "example-marker-d";
	const measurecd = "measure c to d";

	performance.mark(markerNameA);
	const unsortedSet = new Set(unsortedArr);
	performance.mark(markerNameB);

	performance.mark(markerNameC);
	const sortedSet = new Set(sortedArr);
	performance.mark(markerNameD );

	performance.measure(measureab, markerNameA, markerNameB);
	performance.measure(measurecd, markerNameC, markerNameD );

	const unsortedArrTime = performance.getEntriesByName(measureab)[0].duration / 1000.0
	const sortedArrTime = performance.getEntriesByName(measurecd)[0].duration / 1000.0

	// log info about the time it takes to create a new set from an array of size num
	console.log(`initial random array of ${num} items`);
	console.log(`time to create unordered set:${unsortedArrTime}s`, {arr: unsortedArr, setObj: unsortedSet});
	console.log(`time to create ordered set:${sortedArrTime}s`, {arr: sortedArr, setObj: sortedSet});
	performance.clearMarks();
	performance.clearMeasures();

	// conclusion: simple math is showing that the ordered array takes 25% less time to make a new set object a 1millon records, and at 10 million records 20% less time.
  };
