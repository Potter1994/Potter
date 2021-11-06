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
            const weightSum = result.reduce((a,b)=>{
                return a + b.weight;
            },0)
            const sortData = result.sort((a,b)=>{
                return a.weight - b.weight;
            })
            const response = randomPrize(result, weightSum, sortData);
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

function randomPrize (arr, arrSum, sortArr){ // (原本的獎品, 獎品權重, 依權重排列後的獎品)
    const randomIndex = Math.random() * arrSum; // 取得隨機 0~權重值
    const newArr = arr.concat({weight:randomIndex}).sort((a,b)=>{return a.weight - b.weight}) // 將隨機權重值(randomIndex)加入陣列後排序
    let prizeIndex = newArr.findIndex(i=>i.weight == randomIndex); // 取得 randomIndex 位置
    prizeIndex = Math.min(prizeIndex, arr.length-1); // 最大index不超過獎品index值
    return sortArr[prizeIndex]; // 排序後的獎品[prizeIndex]
}


