const db = require('../db');

const userModel = {
    getAll: (cb)=>{
        db.query('SELECT * FROM user',(err, result)=>{
            if(err) return cb(err);
            cb(null, result);
        })
    },
    register: (user, cb)=>{
        db.query('INSERT INTO user (username, nickname, password) VALUES (?,?,?)',
        [user.username, user.nickname, user.password],(err, result)=>{
            if(err) return cb(err);
            cb(null, result);
        })
    },
    login: (username, cb)=>{
        db.query('SELECT * FROM user WHERE username = ? ', [username],
        (err, result)=>{
            if(err) return cb(err);
            cb(null, result[0]);
        })
    }
}

module.exports = userModel;
