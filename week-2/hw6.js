function isValid(arr) {
    for(var i=0; i<arr.length; i++) {
      if (arr[i] <= 0) return 'invalid'
    }
    for(var i=2; i<arr.length; i++) {
      if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
    }
    return 'valid'
  }
  
  isValid([3, 5, 8, 13, 21, 34])


// 第2行的 for 是要讓陣列裡面是正數否則無效
// 第5行的 for 是要讓陣列第三個數開始的數為他前一個與前二個數相加否則無效
// 如果兩個 for 迴圈都沒成功返回無效，則返回第8行的有效