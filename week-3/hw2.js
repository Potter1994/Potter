// 水仙花數


function flowerNumber(n, m) {

    let count = n - 1;
    let arr = [];
    if(1 <= n && n <= m && m <= 10 ** 6) {
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