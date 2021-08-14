// 現在有一個排序好的陣列 arr，裡面的元素都是正整數而且保證不會重複。

// 給你一個數字 n，請寫出一個函式 search 回傳 n 在這個陣列裡面的 index，沒有的話請回傳 -1。

// 範例：

// search([1, 3, 10, 14, 39], 14) => 3
// search([1, 3, 10, 14, 39], 299) => -1
// 這題之所以放在挑戰題，是因為這一題的解法要比這個更快：

// function search(arr, n) {
//   for(var i=0; i<arr.length; i++) {
//     if (arr[i] === n) return i
//   }
//   return -1
// }


//  使用2分法節省他需要驗證的次數
function search(arr, n) {
    let L = 0;
    let R = arr.length - 1;
    while (L < R) { // 這裡 while 如果沒寫好很容易無限迴圈，注意每個運算符號的大小於跟等於
        let M = Math.floor((L + R) / 2);

        if (n > arr[M]) {
            L = M + 1;
        } else if (n < arr[M]) {
            R = M - 1;
        } else if (n === arr[M]) {
            return M;
        }

}
return -1; // 這個 return 沒有放在 while 裡面不然他會跑一次到底直接沒成功就跳這個 return 結束 while 的迴圈，放在 while 外面當 while 跑完都沒有 return 結果 M 代表失敗直接 return -1;
}
