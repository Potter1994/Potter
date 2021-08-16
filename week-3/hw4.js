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




// function solve(lines) {
//   let str = lines[0]
//   console.log(str.split('').reverse().join('') === str ? 'True' : 'False')
// }



// 判斷回文 ，將字串倒過來還是跟原字串一樣
// 蠻簡單的將輸入的轉成字串再用 String 的內建函式將字串顛倒，再用 if 判斷兩字串是否相等就好

function solve(lines) {  // 跟作業3一樣，可以直接用三元運算符判斷是就好
  let nStr = lines[0].toString();
  let nPalindrome = nStr.split('').reverse().join('');
  if (nStr === nPalindrome) {
    return console.log('True');
  } else {
    return console.log('False');
  }

}