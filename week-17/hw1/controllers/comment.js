const commentModel = require('../models/comment');

const commentController = {
    getAll: (req, res)=>{
        commentModel.getAll((err, result)=>{
            if(err) {
                req.flash('errorMessage', err.toString());
            }
            res.render('index',{
                comments: result
            });
        })
    },
    update: (req, res, next)=>{
        commentModel.get(req.params.id, req.session.username, (err, result)=>{
            if(err || !result) {
                req.flash('errorMessage', '無法編輯其他人留言');
                res.redirect('/');
                return next();
            }
            res.render('update',{
                result: result
            });
        })
    },
    add: (req, res, next)=>{
        commentModel.add(req.session.username, req.body.content, (err)=>{
            if(err) {
                req.flash('errorMessage', err.toString());
                return next();
            }
            res.redirect('/');
        })
    },
    handleUpdate: (req, res, next)=>{
        commentModel.update(req.params.id, req.session.username, req.body.content, 
            (err, result)=>{
                res.redirect('/');
        })
    },
    handleDelete: (req, res, next)=>{
        commentModel.delete(req.params.id, req.session.username, (err, result)=>{
            res.redirect('/');
        })
    },
    apiComments: (req, res, next)=>{
        const id = req.params.id;
        commentModel.pagination(id, (err, result)=>{
            if(err) {
                // console.log(err);
                return next();
            }
            res.json(result);
        })
    }
}

module.exports = commentController;