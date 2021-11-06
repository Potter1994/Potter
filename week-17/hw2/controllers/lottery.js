const lotteryModel = require('../models/lottery');

const lotteryController = {
    handleLogin: (req, res, next)=>{
        lotteryModel.login({username: req.body.username, password:req.body.password},
            (err, result)=>{
                if(err) {
                    req.flash('errorMessage', err.toString());
                    res.redirect('back');
                    return next();
                }
                if(!result){
                    req.flash('errorMessage', '使用者帳號或密碼錯誤')
                    res.redirect('back')
                    return next();
                }
                if(result.role != 2){
                    req.flash('errorMessage', '管理員權限不足')
                    res.redirect('back')
                    return next()
                }
                req.session.username = result.username;
                req.session.nickname = result.nickname;
                res.redirect('/')
            })
    },
    index: (req, res)=>{
        res.render('index');
    },
    login: (req, res)=>{
        res.render('login');
    },
    logout: (req, res)=>{
        req.session.username = '';
        req.session.nickname = '';
        res.redirect('/');
    },
    addPrize: (req, res, next)=>{
        lotteryModel.addPrize({
            name: req.body.name,
            weight: req.body.weight,
            url: req.body.imageurl,
            describe: req.body.describe
        },(err, result)=>{
            if(err) {
                req.flash('errorMessage', err.toString());
                res.redirect('back');
                return next();
            }
            req.flash('errorMessage', '新增成功');
            res.redirect('/');
        })
    },
    prizeAPI: (req, res, next)=>{
        lotteryModel.getAll((err, result)=>{
            if(err) {
                req.flash('errorMessage', err.toString());
                res.redirect('back');
                return next();
            }
            res.json(result);
        })
    },
    handleDelete: (req, res)=>{
        lotteryModel.deletePrize(req.params.id, (err, result)=>{
            if(err) {
                req.flash('errorMessage', err.toString());
                res.redirect('back');
                return next();
            }
            res.redirect('/');
        })
    },
    update:(req, res)=>{
        lotteryModel.get(req.params.id, (err, result)=>{
            if(err) {
                req.flash('errorMessage', err.toString());
                res.redirect('back');
                return next();
            }
            res.render('update', {
                data: result
            });
        })
    },
    handleUpdate: (req, res, next)=>{
        lotteryModel.updatePrize({
            name: req.body.name,
            weight: req.body.weight,
            url: req.body.imageurl,
            describe: req.body.describe,
            id: req.params.id
        },(err, result)=>{
            if(err) {
                req.flash('errorMessage', err.toString());
                res.redirect('back');
                return next();
            }
            req.flash('errorMessage', '更新成功');
            res.redirect('/');
        })
    },
    prizeResult: (req, res, next)=>{
        lotteryModel.getAll((err, result)=>{
            const response = randomPrize(result);
            if(err) {
                req.flash('errorMessage', err.toString());
                res.redirect('back');
                return next();
            }
            res.json(response);
        })
    }
}

module.exports = lotteryController;

function randomPrize (arr){
    let sumWeight = arr.reduce((a,b)=>{
        return a + b.weight;
    },0)
    let randomIndex = Math.random() * sumWeight;
    let newArr = arr.concat({weight:randomIndex}).sort((a,b)=>{return a.weight - b.weight})
    let prizeIndex = newArr.findIndex(i=>i.weight == randomIndex);
    if(prizeIndex >= arr.length ){
        return arr[prizeIndex-1]
    }
    return arr[prizeIndex];
}


