const request = require('request');
const twitchUrl = 'https://api.twitch.tv/kraken'



    request({
        url: `${twitchUrl}/games/top`,
        headers: {
            'Client-ID': 's44s145uexjgeu9mqqa1s93oc1bnli',
            'Accept': 'application/vnd.twitchtv.v5+json'
        }
    }, (error, response, body) => {
        if(error) {
            console.log('Error!')
        }
        else{
            let data = JSON.parse(body)
            for(let i = 0; i < data.top.length; i++){
                console.log(`${data.top[i].viewers} ${data.top[i].game.name}`);
            }
            // console.log(response)
        }
    })
