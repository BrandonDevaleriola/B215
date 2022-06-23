/* 
In some languages, structures are called records or classes. 
Some other languages provide no direct support for structures, 
but instead allow them to be built from other constructs (such as tuples or lists).

Each of the node operations specified can be implemented quite easily:

make-node(value, node next)

get-value(node n)
set-value(node n, v)

get-next(node n)
set-next(node n, new-next)

*/
class Node {
	#value;
	#nextNode = null;

	get value() { return this.#value; }
	set value(value) { this.#value = value; }

	get nextNode() { return this.#nextNode; }
	set nextNode(value) { this.#nextNode = value; }

	constructor(value, node) {
	  if (value === undefined || value === null) {
		throw new Error('No value or invalid value given for node creation');
	  }
	  this.value = value;
	  this.nextNode = node instanceof Node ? node : null;
	}
  }
//   let a = new Node(12)
//   console.log(a)
//   let b = new Node(9, a)
//   console.log(b)
//   let d = new Node()
//   console.log(c)
//   Uncaught Error: No value or invalid value given for node creation
