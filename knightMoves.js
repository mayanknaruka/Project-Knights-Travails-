function knightmoves(start, end ) {
   const moves = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2]
];

const queue = [[0,0]]
const visited = new Set(["0,0"]);

const x = -1;
const y = 2

if(x >= 0 && x <= 7 && y >= 0 && y <= 7 ){
    queue.push([x, y])
}

}