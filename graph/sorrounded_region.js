var solve = function (board) {
  const m = board.length;
  const n = board[0].length;
  let visited = [];
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  for (let i = 0; i < m; i++) {
    let arr = new Array(n).fill(0);
    visited.push(arr);
  }

  for (let i = 0; i < m; i++) {
    if (board[i][0] === "O") {
      if (visited[i][0] === 0) {
        dfs(i, 0, visited, board);
      }
    }
    if (board[i][n - 1] === "O") {
      if (visited[i][n - 1] === 0) {
        dfs(i, n - 1, visited, board);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (board[0][i] === "O") {
      if (visited[0][i] === 0) {
        dfs(0, i, visited, board);
      }
    }
    if (board[m - 1][i] === "O") {
      if (visited[m - 1][i] === 0) {
        dfs(m - 1, i, visited, board);
      }
    }
  }

  function dfs(x, y, visited, board) {
    visited[x][y] = 1;
    for (let [dx, dy] of directions) {
      let newx = x + dx;
      let newy = y + dy;
      if (newx >= 0 && newy >= 0 && newx < m - 1 && newy < n - 1) {
        if (board[newx][newy] === "O" && visited[newx][newy] === 0) {
          dfs(newx, newy, visited, board);
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === 0) {
        board[i][j] = "X";
      }
    }
  }
};
