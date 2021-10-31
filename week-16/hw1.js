/* 
題目:https://codesandbox.io/s/closure-homeworks-vh5j3?file=/index.js
解答:https://codesandbox.io/s/closure-homeworks-ans-i5mrd?file=/index.js

1. 請你寫出一個 Robot 的 class，初始化的時候可以設置座標 x 跟 y
接著 Robot 會有兩個方法，getCurrentPosition 跟 go，前者會回傳現在機器人所在的 x 與 y 座標，後者可
以讓機器人往東南西北任一方向移動，需要傳進 'N', "E", 'S', 'W' 任何一個字串，代表要往哪一個方向走，
這個世界是我們所熟悉的二維座標系，因此往北走 Y 座標會增加，往南走 Y 座標會減少，往東走 X 座標會增加，往西走 X 座標會減少

class Robot {
    constructor (x, y) {
        this.x = x,
        this.y = y
    }
    getCurrentPosition(){
        return {
            x: this.x,
            y: this.y
        }
    }
    go(direction){
        if(direction === 'N') this.y++;
        if(direction === 'S') this.y--;
        if(direction === 'E') this.x++;
        if(direction === 'W') this.x--;
    }
}
*/


/*
2. Debounce 
通常我們會把 debounce 的 threshold 設在 250ms，意思就是你打完一個字之後，要 250ms 後才會真的去發 api 拿東西，
如果你在 250ms 以內又打了新的字，就會再等 250ms。

    // 每當 input 的內容有變動，就呼叫 handleChange
    $('input').change(handleChange)

    // 讓原本發後端 api 的函式 debounce
    const debouncedFn = debounce(getAutoSuggestions, 250) 
    這邊將debouncedFn丟入我們寫的debounce環境debouncedFn就變成我們debounce裡面return的箭頭函式(你想命名也行)，這邊幾乎都是使用閉包原理

    function handleChange(e) {
    //   拿到 input 的值
    const value = e.target.value

    // 發 api 去後端拿搜尋建議，然後 render 出來
    // 細節我就不寫了
    // 在 250ms 內重複呼叫的話不會有反應
    debouncedFn(value)  //搭配下面debounce看，只要有value參數帶入，timer = setTimer( () => fn(value), delay)
                            所以就會進入clearTimeout(timer) 然後再重新計時一次(在小於delay前都不會出結果會clear掉)
    }

function debounce(fn, delay){  // 這個例子中fn就是去後端拿api的函式getAutoSuggestions
    let timer = null
    return (...param)=>{
        if(timer){
            clearTimeout(timer)  // 如果小於delay又傳入就會clear掉重新到下面再計時一次
        }
        timer = setTimeout(() => fn(...param), delay)
    }
}

這邊我一個小小的驗證 timer = setTimeout的時候Boolean = 1(true)
// let timer = null;
// if(timer){
//     console.log('good');
// } else{
//     console.log('no')
// }

// timer = setTimeout(()=> console.log('settimeout'), 3000);
// if(timer){
//     console.log(timer);
// }else{
//     console.log('沒有');
// }
*/


/*
3. memoize
假設我們現在有一個很複雜的函式叫做 complex，它的 input 會是一個數字 n
它是一個 pure function，所以傳進去的 input 如果一樣，output 也會一樣
因為它很複雜，所以每一次計算都至少要 2 秒才會回傳結果

但因為它是 pure function，所以我們想在呼叫他的時候，順便把他的結果記下來
如果以後用同樣的參數去呼叫這個函式的話，就把之前記下來的結果回傳就好，因為一定是正確的
可是我們並不想直接去更動 complex 這個函式內部的東西
因此，我們需要一個叫做 memoize 的 function，它可以接收一個函式作為參數，並且幫這個函式加上「記憶」的功能

    console.log(complex(10)) // 等 2 秒才輸出結果
    console.log(complex(10)) // 等 2 秒才輸出結果

    const memoizeFn = memoize(complex)
    console.log(memoizeFn(10)) // 等 2 秒才輸出結果
    console.log(memoizeFn(10)) // 立刻輸出結果，因為我們把之前 complex(10) 回傳過的值記起來了


function memorize(fn){
    let cache = {}  // 裡面放一個存答案的物件
    return (n)=>{
        if(!cache[n]){
            cache[n] = fn(n)  // 如果是第一次就讓他跑吧，然後存進物件
        }
        return cache[n]  // 這邊不用else 不然上面還要return一次，反正結果都會存在cache物件內，回傳這個物件的n的key value就好
    }

}
*/







