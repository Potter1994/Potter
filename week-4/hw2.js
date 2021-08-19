const apiurl = 'https://lidemy-book-store.herokuapp.com';
const request = require('request');

const argv = process.argv;

switch (argv[2]) {
  case 'list' :
    listBook();
    break;
  case 'read' :
    readBook(argv[3]);
    break;
  case 'create':
    createBook(argv[3]);
    break;
  case 'delete' :
    deleteBook(argv[3]);
    break;
  case 'update' :
    updateBook(argv[3],argv[4]);
    break;
}

function listBook() {
  request(`${apiurl}/books?_limit=20`, (error, response, body) => {
    if(error){
      console.log('fail')
    }
    else {
      let data = JSON.parse(body);
      for(let i = 0; i < data.length; i++)
      console.log(`${data[i].id} ${data[i].name}`)
    }
  })
}

function readBook (num) {
  request(`${apiurl}/books/${num}`, (error, response, body) => {
    if(error){
      console.log('fail');
    }
    else{
      let data = JSON.parse(body);
      console.log(data.id, data.name)
    }
  })
}

function createBook(str) {
  request.post({
    url : `https://lidemy-book-store.herokuapp.com/books`,
    form: {
      name : str
    } 
  }, (error, response, body) => {
    if(error) {
      console.log('fail')
    }
    else{
      console.log(body)
      console.log('success')
    }
  })
}

function deleteBook(num) {
  request.delete(`${apiurl}/books/${num}`, (error, response, body) => {
    if(error) {
      console.log('fail')
    }
    else {
      console.log(body);
      console.log('success', response.statusCode);
    }
  })
}

function updateBook(num,str) {
  request.patch({
    url: `${apiurl}/books/${num}`,
    form: {
      name : str
    }
},
  (error, response, body) => {
    if(error){
      console.log('fail')
    }
    else{
      console.log(JSON.parse(body));
      console.log('success');
    }
  })
}