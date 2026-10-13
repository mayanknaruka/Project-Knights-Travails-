
function knightMoves(start, end) {
  const moves = [
    [1, 2], [2, 1],
    [2, -1], [1, -2],
    [-1, -2], [-2, -1],
    [-2, 1], [-1, 2]
  ];

  const key = ([x, y]) => `${x},${y}`;

  const queue = [start];
  const visited = new Set([key(start)]);
  const parent = new Map();

  while (queue.length > 0) {
    const current = queue.shift();

    if (key(current) === key(end)) {
      const path = [];
      let position = key(end);

      while (position !== undefined) {
        path.push(position.split(",").map(Number));
        position = parent.get(position);
      }

      path.reverse();

      console.log(
        `You made it in ${path.length - 1} moves! Here's your path:`
      );

      path.forEach(square => console.log(square));

      return path;
    }

    for (const [dx, dy] of moves) {
      const next = [current[0] + dx, current[1] + dy];
      const [x, y] = next;
      const nextKey = key(next);

      if (
        x >= 0 && x <= 7 &&
        y >= 0 && y <= 7 &&
        !visited.has(nextKey)
      ) {
        visited.add(nextKey);
        parent.set(nextKey, key(current));
        queue.push(next);
      }
    }
  }
}
