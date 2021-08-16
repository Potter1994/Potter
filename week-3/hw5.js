let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin
})

let lines = [];

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function () {
  solve(lines)
});

function solve(lines) {
  let arr = [];
  for (let i = 1; i < lines.length; i++) {
    let line = lines[i].toString().split(' ');
    let A = Number(line[0]);
    let B = Number(line[1]);
    let K = Number(line[2]);
    arr.push(whoWin(A, B, K));
  }
  console.log(arr);
}

function whoWin(a, b, k) { // 這裡是我看過稍微看過解答把她寫的精簡一點的地方是在他的判斷式
  if (a === b) {
    return 'DRAW'
  }
  if (k === 1) {
    return (a > b) ? 'A' : 'B';
  } else if (k === -1) {
    return (a > b) ? 'B' : 'A';
  }
}