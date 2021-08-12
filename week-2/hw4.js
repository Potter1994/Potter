// 印出因數


// 這題很簡單，只是 i 不能等於 0 ，等於 0 無意義
function printFactor(n) {
    for (i = 1; i <= n; i++){
        if(n % i === 0) {
            console.log(i);
        }
    }
}