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

// -------解答---------
// function solve(lines){
//     for(let i=1; i<lines.length; i++) {
//       // 重點是這行
//       console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite')
//     }
//   }
  
//   function isPrime(n) {
//     if (n === 1) return false;
//     const num = Math.sqrt(n);
//     for (let i = 2; i <= num; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }



// ---------自己的答案，還可以

function solve(lines) {
  let N = Number(lines[0]); // 這段我太白癡了，根本不用知道頭是多少，往地一個 for 迴圈看如何更改
  let P;
  
  let arr = [];
  for (let i = 1; i <= N; i++) {// 直接不用分 P 跟 N 寫成 i = 1; i < lines.length; i++ 即可
    P = Number(lines[i]);
    arr.push(check(P));

  }
  console.log(arr);
}

function check(num) {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return ('Composite');
    }
  }
  if (num === 1) {
    return ('Composite');
  } else {
    return ('Prime');
  }
}



//  算解對，只是方法跟解答不同，