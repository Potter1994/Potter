const request = require('request');
const twitchUrl = 'https://www.twitch.tv/directory/game/';
const gameName = process.argv[2];








function popular(game) {
    request({
        url: twitchUrl,
        'Client-ID': 's44s145uexjgeu9mqqa1s93oc1bnli'
    }, (error, response, body) => {
        if(error){
            console.log('Fetch failed!')
        }
        else{
            let data = JSON.parse(body);
        }
    })
}