//https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1
function shortest(adj, src) {
  let visited = new Array(adj.length).fill(0);
  let distance = new Array(adj.length).fill(-1);
  let queue = [[src, 0]];
  let front = 0;
  visited[src] = 1;
  while (front < queue.length) {
    const [node, dis] = queue[front];
    distance[node] = dis;
    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        queue.push([neighbor, dis + 1]);
        visited[neighbor] = 1;
      }
    }
  }
  return distance;
}
