// Hoisting 有些程式語言需要先宣告 function 才能接下去寫，JS變數提升所以function寫在哪都行
    console.log(a);
    var a = 10;
    /* 
    var a;
    console.log(a);
    a=10;
    */


// Closuer 把你不想被外面變數影響的東西丟進去一個function當成她的環境(作用域)，例如
// 有兩個需要用到count的計數器，各給他一個createCounter()，互相不影響彼此的count。
// 各自環境(作用域)不影響。
    function createCounter(){
        var count = 0;
        return function () {
            count++;
            return count;
        }
    }

    // 我理解為把counter丟進去createCounter的函式裡面，作用域就在createCounter裡面。
    var counter = createCounter();
    // 為何是log counter()而不是counter? 
    // 因為counter現在是return createCounter()執行出來的結果就是return裡面的函式。
    console.log(counter());
    // 目的為了不讓外面的變數影響到裡面，例如突然加了一個 count = 10 也不會改變counter的結果。
    count = 10;
    console.log(counter());





