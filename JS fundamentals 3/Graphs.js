let v = 4;
let adj = [];

for (let i = 0; i < v; i++) {
  let row = [];
  adj.push(row);
}

let addEdge = (adj, u, v) => {
  adj[u].push(v);
  adj[v].push(u);
};
addEdge(adj, 0, 1);
addEdge(adj, 0, 2);
addEdge(adj, 1, 3);
addEdge(adj, 2, 3);
console.log(adj);
