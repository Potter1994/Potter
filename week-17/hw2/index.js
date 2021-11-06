const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const bp = require('body-parser');

const db = require('./db');
const lotteryController = require('./controllers/lottery');

const port = 9876;


app.set('view engine', 'ejs');

app.use(bp.json());
app.use(bp.urlencoded({extended:false}));
app.use(flash());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized:true
}));
app.use((req, res, next)=>{
    res.locals.username = req.session.username;
    res.locals.nickname = req.session.nickname;
    res.locals.errorMessage = req.flash('errorMessage');
    return next();
})


// route
app.get('/', lotteryController.index);
app.get('/login', lotteryController.login);
app.get('/logout', lotteryController.logout);
app.post('/login', lotteryController.handleLogin);

app.get('/api/prize', lotteryController.prizeAPI);
app.get('/api/startprize', lotteryController.prizeResult);
app.get('/prize/update/:id', lotteryController.update);
app.post('/prize/update/:id', lotteryController.handleUpdate);
app.post('/prize/add', lotteryController.addPrize);
app.get('/prize/delete/:id', lotteryController.handleDelete);







app.listen(port, ()=>{
    db.connect();
    console.log(`Server is running at http://localhost:${port}`);
})