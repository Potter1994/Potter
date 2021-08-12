// 自己的函式自己寫
// 其實仔細思考的話，你會發現那些陣列內建的函式你其實都寫得出來，因此這一題就是要讓你自己動手實作那些函式！

// 我們要實作的函式有兩個：join 以及 repeat。（再次強調，這一題要你自己實作這些函式，所以你不會用到內建的join以及repeat）

// join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後回傳合起來的字串。

// repeat 的話就是回傳重複 n 次之後的字串。



function join(arr, concatStr) {
    if (arr.length === 0) { // special case
        return '';
    }

    let result = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        result += concatStr + arr[i];
    }
    return result;
}



function repeat(str, times) {
    let result = '';
    for (let i = 0; i < times; i += 1) {
        result += str;
    }
    return result;
}




// 我沒有想到特殊情形，如果陣列是空的時候特別處理，在這情況下應該要回傳空字串。
// 而這邊我如果讓 arraySrt = array[0] 會更清楚的知道這是用來當 array 的字串使用的，如果我這樣使用，後續的迴圈也該更改為解答那樣

// function join (array, icon) {
//     let arrayStr = '';
//     for (i = 0; i < array.length; i++) {
//         arrayStr += array[i] + icon;
//     }
//     console.log(arrayStr);
// }

// function repeat(str, n) {
//     let strResult = '';
//     for ( i = 0; i < n; i++) {
//         strResult += str;
//     }
//     console.log(strResult);
// }