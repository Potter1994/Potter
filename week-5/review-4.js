// hw1
// hw2
// const baseURL = 'https://lidemy-book-store.herokuapp.com';
// const request = require('request');

// switch(process.argv[2]) {
//     case 'list':
//         listBook();
//         break;
//     case 'read':
//         readBook(process.argv[3]);
//         break;
//     case 'create':
//         createBook(process.argv[3]);
//         break;
//     case 'update':
//         updateBook(process.argv[3], process.argv[4]);
//         break;
//     case 'delete':
//         deleteBook(process.argv[3]);
//         break;
// }

// function listBook() {
//     request(`${baseURL}/books?_limit=10`, (err, res, body) => {
//         if(err) {
//             console.log('Error');
//         }
//         else{
//             let data = JSON.parse(body);
//             for(let i = 0; i < data.length; i++) {
//                 console.log(data[i].id + ' ' + data[i].name)
//             }
//         }
//     })
// }

// function readBook(num) {
//     request(`${baseURL}/books/${num}`, (err, res, body) => {
//         if(err) {
//             console.log('Error');
//         }
//         else{
//             console.log(res)
//         }
//     })
// }

// function createBook(name){
//     request.post({
//         url: `${baseURL}/books`,
//         form: {
//             name
//         }
//     }, (err, res, body) => {
//         if(err) {
//             console.log('Error');
//         }
//         else{
//             console.log(JSON.parse(body))
//         }
//     })
// }

// function updateBook(id, rename){
//     request.patch({
//         url: `${baseURL}/books/${id}`,
//         form: {
//             name: rename
//         }
//     }, (err, res, body) => {
//         if(err) {
//             console.log('Error');
//         }
//         else{
//             console.log(JSON.parse(body))
//         }
//     })
// }

// function deleteBook(num){
//     request.delete(`${baseURL}/books/${num}`, (err, res, body) => {
//         if(err){
//             console.log('Error');
//         }
//         else{
//             console.log(res.statusCode);
//         }
//     })
// }



// ========================================================

// s44s145uexjgeu9mqqa1s93oc1bnli
// hw4
// const baseURL = 'https://api.twitch.tv/kraken';
// const request = require('request');

// request(
//     {
//         url: `${baseURL}/games/top`,
//         headers: {
//             'Client-ID': 's44s145uexjgeu9mqqa1s93oc1bnli',
//             'Accept': 'application/vnd.twitchtv.v5+json'
//         }
//     }, (err, res, body) => {
//         if (err) {
//             console.log('Error');
//         }
//         else {
//             let data = JSON.parse(body).top
//             for (let i = 0; i < data.length; i++)
//                 console.log(data[i].viewers + ' ' + data[i].game.name);
//         }
//     })

// ========================================================

// Challenge

// 目前看了解答也還是不太明白