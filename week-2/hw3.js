// 反轉字串
// 給定一個字串，請「印出」反轉之後的樣子（不能使用內建的 reverse 函式）


function reverse(str) {
    let result = '';
    for (i = str.length-1; i >= 0 ; i--) {
        result += str[i];
    }
    console.log(result);
}



// 其實可以直接使用迴圈用--方式倒著回去就好，我使用迴圈++加上陣列的 unshift 倒著放進空陣列 strArray ，多了型別的轉換所以顯得迂迴冗長
// function reverse (str) {
//     let strArray = [];
//     for(i = 0; i < str.length; i++){
//         strArray.unshift(str[i]);
//     }
//     console.log(strArray.join(''));
// }