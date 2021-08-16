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
//   for(let i=1; i<lines.length; i++) {
//     console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite')
//   }
// }

// function isPrime(n) {
//   // 一行的時候可以偷省略括號，雖然我不知道 eslint 會不會給過就是了XD
//   if (n === 1) return false;

//   // 找根號以內的數就好，這是數學小知識
//   // 先把開根號的值存好，否則每一圈迴圈都會運算一次
//   const num = Math.sqrt(n);
//   for (let i = 2; i <= num; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }



// ---------自己的答案，還可以
function solve(lines) {
  for (let i = 1; i < lines.length; i++) { 
    console.log(check(Number(lines[i]))) //  這裡也可向解答那樣在這裡用判斷是然後我們 check 回傳布林值
  }
}

function check(num) {
  for (i = 2; i < num; i++) {   // 這裡可以寫得更好用解答那個只跑到根號以內的數就好，可以少跑很多數字
    if (num % i === 0) {
      return 'Composite';
    }
  }
  if (num === 1) {
    return 'Composite';
  } else {
    return 'Prime';
  }
}



//  算解對，只是方法跟解答不同，