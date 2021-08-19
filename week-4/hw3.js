const apiUrl = 'https://restcountries.eu/rest/v2/name/';
const request = require('request');
const para = process.argv[2];

if (!para){
    return console.log('請輸入國家名稱')
}

request(`${apiUrl}${para}`, (error, response, body) => {
    if(error) {
        return console.log('fail')
    }
    else if(response.statusCode == 404) {
        return console.log('找不到國家資訊')
    }
    else{
        let data = JSON.parse(body);
        let obj = {};
        // console.log(data)
        for(let i = 0; i < data.length; i++){
        console.log('============');
        obj = {
            '國家 ' :data[i].name,
            '首都: ' :data[i].capital, 
            '貨幣: ' :data[i].currencies[0].code,
            '國碼: ' :data[i].callingCodes[0]
        };
        console.log(obj)
        }
    }
})
