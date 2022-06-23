//Return a new array with empty indicies
const makeArray = (size) => Array.from( new Array(size))
//Return a new 2D non-jagged array with empty indicies
const make2DimensionalArray = (size) => Array.from(new Array(size), () => new Array(size))
//Return a new 3D non-jagged array with empty indicies
const make3DimensionalArray = (size) => Array.from(new Array(size), () => Array.from(new Array(size), () => new Array(size)))
//Return a new 4D non-jagged array with empty indicies
const make4DimensionalArray = (size) => Array.from(new Array(size), () => Array.from(new Array(size), () => Array.from(new Array(size), () => new Array(size))))