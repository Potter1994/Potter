// 給定 n (1 <= n <= 30) ，依規律印出正確圖形

function printStars(n) {
    if(n <= 30 && n >= 1){
        for(i=1;i <= n;i++){
            console.log('*');
        }
    }
}