//  好多星星


function printStar(n) {
    let arr = [];
    let star = '';
    if(n >= 1 && n <= 30){
        for(i=0;i<n;i++) {
            star += '*';
            arr.push(console.log(star));
          }
    }

  }