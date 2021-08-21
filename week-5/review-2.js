
// hw1
// function printStar(n) {
//     for(let i = 0; i < n; i++) {
//         console.log('*');
//     }
// }
// printStar(process.argv[2]);

// ======================================================

// hw2
// function capitallize(str) {
//     console.log(str[0].toUpperCase() + str.slice(1))
// }
// capitallize(process.argv[2]);

// ======================================================

// hw3
// function reverseP(str){
//     let result = '';
//     for( let i = str.length-1; i >= 0 ; i--){
//         result += str[i];
//     }
//     console.log(result);
// }
// reverseP(process.argv[2]);

// ======================================================

// hw4
// function printFactor(num) {
//     for(let i = 0; i <= num/2;i++){
//         if(Number(num % i) === 0){
//             console.log(i);
//         }
//     }
//     console.log(num)
// }
// printFactor(process.argv[2]);

// ======================================================

// hw5
// function joinP(arr, str) {
//     let result = '';
//     for(let i = 0; i < arr.length - 1; i++){
//         result += arr[i] + str;
//     }
//     return console.log(result + arr[arr.length - 1])
// }
// joinP(process.argv[2], process.argv[3]);

// function repeatP(str, num) {
//     let result = '';
//     for(let i = 0; i < num; i++) {
//         result += str;
//     }
//     console.log(result);
// }
// repeatP(process.argv[2], process.argv[3])


// ======================================================

// challenge

// function search(arr, n) {
//     let L = 0;
//     let R = arr[arr.length-1];
//     while(L <= R) {  // 這裡我沒 + 這個 =
//         let M = Math.floor((L + R) / 2); // 忘記有.5的可能，須加上這個 Math.floor
//         if(n < arr[M]) {
//             R = M - 1;
//         } 
//         else if(n > arr[M]){
//             L = M + 1
//         }
//         else if (n == arr[M]){
//             return M;
//         }
//     }
//     return -1;
// }

// ======================================================