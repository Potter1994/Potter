// 水仙花數

// 拿到所有資料
// function solve(lines) {
//     // 5 200 => ['5', '200']
//     let temp = lines[0].split(' ')
//     let n = Number(temp[0])
//     let m = Number(temp[1])
//     for(let i=n; i<=m; i++) {
//       if (isNarcissistic(i)) {
//         console.log(i)
//       }
//     }
//   }
  
//   // 回傳數字幾位數
//   function digitsCount(n) {
//     if (n===0) return 1
//     let result = 0
//     while(n != 0) {
//       n = Math.floor( n / 10)
//       result++
//     }
//     return result
//   }
  
//   function isNarcissistic(n) {
//     // 幾位數
//     let m = n
//     let digits = digitsCount(m)
//     let sum = 0
//     while(m != 0) {
//       let num = m % 10
//       // 可改成 Math.pow(num, digits)
//       sum += num**digits 
//       m = Math.floor( m / 10)
//     }
  
//     // 可簡化成
//     // return sum === n
//     if (sum === n) {
//       return true
//     } else {
//       return false
//     }
//   }
  
//   // 偷吃步的做法
//   function isNstr(n) {
//     let str = n + ''
//     let digits = str.length
//     let sum = 0
//     for(let i=0; i<str.length; i++) {
//       sum += Number(str[i])**digits
//     }
//     return sum === n
//   }




// 解答是使用 while 跟餘數 % 來去定義為幾位數
// 這裡我用轉陣列再算他的 length 就知道有幾位了，比較方便快速

function solve(lines) {
    let n = Number(lines[0].split(' ')[0]);
    let m = Number(lines[0].split(' ')[1]);
    let count = n - 1;
    let arr = [];
    if (1 <= n && n <= m && m <= 10 ** 6) {
        for (let i = 0; i < (m - n + 1); i++) {
            count++;
            let countArr = count.toString().split('');
            let sum = 0;
            for (let j = 0; j < countArr.length; j++) {
                sum += countArr[j] ** countArr.length;
            }
            if (sum === count) {
                arr.push(sum);
            }
        }
        for (let k = 0; k < arr.length; k++) {
            console.log(arr[k]);

        }
    }
}