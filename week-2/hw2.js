// 首字母大寫
// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。


// 如解答這樣能夠更簡潔有力且直觀的寫出功能是最好
function capitalize(str) {
    return console.log(str[0].toUpperCase() + str.slice(1));
}



// 一開始我的作法，寫了太多變數去把它儲存，導致看起來一堆變數以及冗長
// function capitalize(str) {
//     let firstLetter = str[0];
//     let upper = firstLetter.toUpperCase();
//     let result = str.replace(firstLetter, upper);
//     return console.log(result);
// }