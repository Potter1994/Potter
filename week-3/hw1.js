//  好多星星


// function solve(lines){
//   let n = Number(lines[0])
//   for (let i = 1; i <= n; i++){
//     console.log('*'.repeat(i))
//   }
// }

function solve(lines) {
  let n = lines[0]; // 記得加上 Number 確保是數字
  let arr = [];     //學解答用 repeat 比較迅速，多熟練各種函數應用
  let star = '';
  for(i=0;i<n;i++) {
    star += '*';
    arr.push(console.log(star));
  }
}