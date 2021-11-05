const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const bp = require('body-parser');
const app = express();
const port = 9999;
const db = require('./db');
const userController = require('./controllers/user');
const commentController = require('./controllers/comment');

app.set('view engine', 'ejs');

// middleware area
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
app.use(flash());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use((req, res, next)=>{
    res.locals.username = req.session.username;
    res.locals.errorMessage = req.flash('errorMessage');
    next();
})


function checkLogin(req, res, next){
    if(req.session.username){
        res.redirect('back');
    } else{
        return next();
    }
}

function checkPermission(req, res, next){
    if(!req.session.username){
        res.redirect('back');
    }else{
        next();
    }
}


// register and login systerm
app.get('/register', checkLogin, userController.register);
app.get('/login', checkLogin, userController.login);
app.get('/logout', userController.logout);
app.post('/login', userController.handleLogin);
app.post('/register', userController.addRegister);

// CRUD comments systerm

app.get('/', commentController.getAll)
app.post('/comment', checkPermission, commentController.add)
app.get('/update_comment/:id', checkPermission, commentController.update);
app.post('/update_comment/:id', checkPermission, commentController.handleUpdate);
app.get('/delete_comment/:id', checkPermission, commentController.handleDelete);






app.listen(port, ()=>{
    db.connect();
    console.log(`Server is running at http://localhost:${port}`);
})