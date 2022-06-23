
// edge list 
const edgeListGraph = [[0, 1], [1, 2], [1, 3], [2, 3]];

// adjacency list
const graphAdjList = [
    [1],
    [0, 2, 3],
    [1, 3],
    [1, 2],
]

//hashtable (dictionary) as a graph
const graphDict = {
    0: [1],
    1: [0, 2, 3],
    2: [1, 3],
    3: [1, 2],
}

// Breadth-first search - use a Queue to traverse verticies 


// Depth-first search - use a stack to traverse verticies

/* 
Questions 

Is there a path between two nodes in this undirected graph? 
Run DFS or BFS from one node and see if you reach the other one.

What's the shortest path between two nodes in this undirected, unweighted graph?
Run BFS from one node and backtrack once you reach the second. Note: BFS always 
finds the shortest path, assuming the graph is undirected and unweighted. DFS does not always find the shortest path.

Can this undirected graph be colored with two colors?
Run BFS, assigning colors as nodes are visited. Abort if we ever 
try to assign a node a color different from the one it was assigned earlier.

Does this undirected graph have a cycle? 
Run BFS, keeping track of the number of times we're visiting each node. 
If we ever visit a node twice, then we have a cycle.

Other Solutions

Dijkstra's Algorithm: 
Finds the shortest path from one node to all other nodes in a weighted graph.

Topological Sort:
Arranges the nodes in a directed, acyclic graph in a special order based on incoming edges.

Minimum Spanning Tree: 
Finds the cheapest set of edges needed to reach all nodes in a weighted graph.

*/