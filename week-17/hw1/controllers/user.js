const userModel = require('../models/user');
const bcrypt = require('bcrypt');

const userController = {
    addRegister: (req, res, next)=>{
        const {username, nickname, password} = req.body;
        if(!username || !nickname || !password){
            req.flash('errorMessage', '資料不齊全');
            return res.redirect('back');
        }
        bcrypt.hash(password, 10, (err, hash)=>{
            if(err) { 
                req.flash('errorMessage', err.toString());
                return res.redirect('back');
            }
            userModel.register({
                username,
                nickname,
                password: hash
            }, (err, result)=>{
                if(err) {
                    let str = '';
                    if(err.toString().indexOf('username') != -1){
                        str = '帳號已存在'
                    } else{
                        str = '暱稱已被使用'
                    }
                    req.flash('errorMessage', str);
                    return res.redirect('back');
                }  
                req.session.username = username;
                res.redirect('/');
            })
        })
    },
    logout: (req, res)=>{
        req.session.username = '';
        res.redirect('/');
    },
    login: (req, res)=>{
        res.render('login');
    },
    register: (req, res)=>{
        res.render('register')
    },
    handleLogin: (req, res)=>{
        const {username, password} = req.body;
        if(!username || !password) {
            req.flash('errorMessage', '請輸入完整帳號密碼')
            return res.redirect('back');
        }
        userModel.login(username, (err, result)=>{
            if(err || !result) {
                req.flash('errorMessage', '帳號不存在')
                return res.redirect('back');
            }
            bcrypt.compare(password, result.password, (err, success)=>{
                if(err || !success) {
                    req.flash('errorMessage', '密碼錯誤');
                    return res.redirect('back');
                }
                req.session.username = username;
                res.redirect('/');
            })
            
        })
    }
}

module.exports = userController;