// 使用別人提供的 request 模組 https://github.com/request/request
// 也可自己從頭寫到尾，去 stackoverflow 看人家怎麼解 https://stackoverflow.com/questions/9577611/http-get-request-in-node-js-express
const request = require('request');

// 串接別人網頁 API 的文件
const APIurl = 'https://lidemy-book-store.herokuapp.com/books';

// 參數第一個為 API 的網址，第二個為回調函數，裡面的參數都為當初設計者模組所定義給的
request(`${APIurl}?_limit=10`, (error, response, body) => {
    if(error) {
        console.log(抓取錯誤);
        return
    }
    else {
        // console.log(typeof body);
        let data = JSON.parse(body); // 將原本 JSON 字串型態轉為物件
        // console.log(typeof data);
        for(let i = 0; i < data.length; i++){
            console.log(data[i].id, data[i].name);
        }
    }

}) 