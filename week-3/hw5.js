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

// 我錯的地方在於數字太大的時候一個很大的數字被轉成 Number 之後會變成無限大（Infinity）
// 所以比較大小就失去作用了，我這是沒完成的答案



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

function whoWin(a, b, k) { 
  if (a === b) {
    return 'DRAW'
  }
  if (k === 1) {
    return (a > b) ? 'A' : 'B';
  } else if (k === -1) {
    return (a > b) ? 'B' : 'A';
  }
}



//-----------------解答


// function compare(a, b, p) {
//   if (a === b) return "DRAW"

//   // 先假設我們都是比大，所以 A 大就回傳 A，B 大就回傳 B
//   // 那如果是比小怎麼辦？把 AB 對調就好
//   // 假設 A 是 5，B 是 3，我們的邏輯會回傳 A
//   // 但如果是比小，把 AB 對調，就會回傳 B 了
//   if (p == -1) {
//     let temp = a
//     a = b
//     b = temp
//   }

//   const lengthA = a.length
//   const lengthB = b.length

//   if (lengthA != lengthB) {
//       return lengthA > lengthB ? "A" : "B"
//   }
//   for (let j = 0; j < lengthA; j++) {
//       if (a[j] == b[j]) {
//           continue;
//       }
//       return a[j] > b[j] ? "A" : "B"
//   }
// }

// function solve(lines) {
//   let m = Number(lines[0])
//   for(let i=1;i<=m; i++){
//     let [a, b, p] = lines[i].split(' ')
//     console.log(compare(a, b, p))
//   }
// }



//--------------解答2

// 但更進一步去想就會發現其實不需要自己用迴圈比大小，因為字串其實比的是字典序，如果兩個字串長度相同，那字典序其實就是數字大小的順序，所以可以簡化成這樣：

// function compare(a, b, p) {
//   if (a === b) return "DRAW"

//   // 先假設我們都是比大，所以 A 大就回傳 A，B 大就回傳 B
//   // 那如果是比小怎麼辦？把 AB 對調就好
//   // 假設 A 是 5，B 是 3，我們的邏輯會回傳 A
//   // 但如果是比小，把 AB 對調，就會回傳 B 了
//   if (p == -1) {
//     let temp = a
//     a = b
//     b = temp
//   }

//   const lengthA = a.length
//   const lengthB = b.length

//   if (lengthA != lengthB) {
//       return lengthA > lengthB ? "A" : "B"
//   }
//   return a > b ? 'A' : 'B'
// }


//---------------解答3


// 或是你也可以用比較新的資料型態：BigInt 去解這題，但建議大家試著不要用這個來解解看：

// function solve(lines) {
//   let m = Number(lines[0])
//   for(let i=1;i<=m; i++){
//     let [a, b, p] = lines[i].split(' ')
//     if (BigInt(a) === BigInt(b)) {
//       console.log('DRAW')
//     } else if ((BigInt(a) > BigInt(b) && p == 1) || (BigInt(a) < BigInt(b) && p == -1) ) {
//       console.log('A')
//     } else {
//       console.log('B')
//     }
//   }
// }