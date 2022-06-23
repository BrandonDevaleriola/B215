// LLNodes = a key and a link to nextNode
/* LL Operations:
	done - isEmpty() - is head null
	done - pushHead(node) - add to front
	done - getHead() - return head node
	done - pushTail(node) - addNode as last node in list
	done findNode(nodeValue) - find a node by value
	done findNodeIndexUsingNodeValue(nodeVlaue) - find the index of a node in the list using a nodeValue
	done findNodeByIndex(index) - find a node using a index
	done findPreviousByIndex(index) - find a previous node using an index
	done removeNode(nodeValue) - remove a node by vlaue
	done popHead() - remove head node, make next node the head node
	done popTail() - remove tail node and make previous node to tail the new tail
	done addBeforeNode(node, newNode) - add a new node before a specfic node
	done addAfterNode(node, newNode) - add a new node after a specfic node
*/

class Node {
	constructor(value) {
	  this.value = value;
	  this.next = null;
	}
  }

class LinkedList {
	constructor() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}

	isEmpty() {
		if (this.length) return true;
		return false;
	}

// Head operations
	getHead() {
		if (isEmpty()) return null;
		return this.head
	}

	popHead() {
		if (isEmpty) return;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length = this.length - 1;
			return;
		}
		this.head = this.head.next;
		this.length = this.length - 1;
	}

	pushHead() {
		const node = new Node(value);
		this.length = this.length + 1;
		if (!this.head) {
		  this.head = node;
		} else {
		  const previousHead = this.head
		  this.head = node;
		  this.head.next = previousHead;
		}
	}
// Node Operations
	getNode(index) {
		const node = this.findNode(index);
		if (!node) return null;
		return node;
	}

	addBeforeNode(node, value) {
		const newNode = new Node(value);
		const previousNode = this.findNodeIndexUsingNodeValue(node.value)
		this.length = this.length + 1;
		previousNode.next = newNode
		newNode.next = node
	}

	addAfterNode(node, value) {
		const newNode = new Node(value);
		const nextNode = node.next;
		newNode.next = nextNode;
		node.next = newNode;
	}

	findNode(nodeValue) {
	  let foundNode = null;
	  if (this.head === null) return foundNode;
	  if (this.length === 1 && nodeValue === this.head.value) return this.head
	  let currentNode = this.head.next;
	  while(currentNode !== null) {
		if (currentNode.value === nodeValue) {
			foundNode = currentNode;
			break;
		}
		currentNode = currentNode.next;
	  }
	  return foundNode;
	}

	findNodeIndexUsingNodeValue(nodeValue) {
		let foundNode = null;
		if (this.head === null) return foundNode;
		if (this.length === 1 && nodeValue === this.head.value) return this.head
		let currentNode = this.head.next;
		let count = 1;
		while(currentNode !== null) {
		  if (currentNode.value === nodeValue) {
			  break;
		  }
		  count = count + 1;
		  currentNode = currentNode.next;
		}
		return count;
	  }

	findNodeByIndex(index) {
		if (index >= this.length) return null;
		let current = this.head;
		for (let i = 0; i < index; i++) {
		  current = current.next;
		}
		return current;
	}
  
	findPreviousByIndex(index) {
		  if (index - 1 >= this.length) return null;
		  let current = this.head;
		  for (let i = 0; i < index - 1; i++) {
			current = current.next;
		  }
		  return current;
	}

	removeNode(nodeValue) {
		if (this.head === null) return null;
		if (this.length === 1 && nodeValue === this.head.value) return this.head = nill
		const removeNode = this.findNode(nodeValue)
		if (removeNode) {
			const removeNodeIndex = this.findNodeIndexUsingNodeValue(removeNode.value)
			const nextNode = removeNode.next;
			const previousNode = this.findNodeByIndex(removeNodeIndex - 1)
			previousNode.next = nextNode;
		}
	  }
// Tail operations
	popTail() {
		if (isEmpty) return;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length = this.length - 1;
			return;
		}
		const previous = this.findNode(this.length - 1)
		if (previous) {
			this.tail = previous;
			this.length = this.length - 1;
		}
		
	}

	pushTail(value) {
	  const node = new Node(value);
	  this.length = this.length + 1;
	  if (!this.isEmpty) {
		this.head = node;
		this.tail = node;
	  } else {
		const previousTail = this.tail
		previousTail.next = node;
		this.tail = node;
	  }
	}
}
  
  
//   // unit tests
//   // do not modify the below code
//   describe("LinkedList", function () {
// 	const range = (length) =>
// 	  Array.apply(null, { length: length }).map(Number.call, Number);
// 	const abcRange = (length) =>
// 	  range(length).map((num) => String.fromCharCode(97 + num));
// 	let list;
  
// 	beforeEach(() => {
// 	  list = new LinkedList();
// 	});
  
// 	test("constructor", () => {
// 	  expect(list).toEqual(expect.any(LinkedList));
// 	});
  
// 	test("push", () => {
// 	  abcRange(26).map((character) => list.push(character));
// 	  expect(list.length).toEqual(26);
// 	});
  
// 	test("pop", () => {
// 	  abcRange(13).map((character) => list.push(character));
// 	  expect(list.length).toEqual(13);
// 	  range(10).map(() => list.pop());
// 	  expect(list.length).toEqual(3);
// 	  expect(list.pop()).toEqual("c");
// 	});
  
// 	test("get", () => {
// 	  list.push("first");
// 	  expect(list.get(0)).toEqual("first");
// 	  list.push("second");
// 	  expect(list.get(1)).toEqual("second");
// 	  expect(list.get(0)).toEqual("first");
// 	  abcRange(26).map((character) => list.push(character));
// 	  expect(list.get(27)).toEqual("z");
// 	  expect(list.get(0)).toEqual("first");
// 	  expect(list.get(9)).toEqual("h");
// 	  list.pop();
// 	  expect(list.get(list.length - 1)).toEqual("y");
// 	});
  
// 	test("delete", () => {
// 	  abcRange(26).map((character) => list.push(character));
// 	  list.delete(13);
// 	  expect(list.length).toEqual(25);
// 	  expect(list.get(12)).toEqual("m");
// 	  expect(list.get(13)).toEqual("o");
// 	  list.delete(0);
// 	  expect(list.length).toEqual(24);
// 	  expect(list.get(0)).toEqual("b");
// 	});
//   });
  