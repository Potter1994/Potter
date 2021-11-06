const db = require('../db');

const lotteryModel = {
    login: (user, cb)=>{
        db.query(`
        SELECT * FROM user WHERE username = ? AND password = ?
        `, [user.username, user.password],
        (err, result)=>{
            if(err) return cb(err);
            cb(null, result[0]);
        })
    },
    getAll: (cb)=>{
        db.query('SELECT * FROM prize',(err, result)=>{
            if(err) return cb(err);
            cb(null, result);
        })
    },
    addPrize: (prize, cb)=>{
        db.query('INSERT INTO prize (`name`, `weight`, `url`, `describe`) VALUES (?,?,?,?)',
        [prize.name, prize.weight, prize.url, prize.describe],(err, result)=>{
            if(err) return cb(err);
            cb(null, result);
        })
    },
    deletePrize: (id, cb)=>{
        db.query('DELETE FROM prize WHERE id = ?', [id],
        (err, result)=>{
            if(err) return cb(err);
            cb(null, result);
        })
    },
    updatePrize: (data, cb)=>{
        const timed = new Date();
        db.query('UPDATE `prize` SET `name` = ? , `weight` = ? , `url` = ? , `describe` = ?, `update_at` = ? WHERE `id` = ?',[data.name, data.weight, data.url, data.describe, timed, data.id],
                (err, result)=>{
                    if(err) return cb(err);
                    cb(null, result);
                })
    },
    get:(id, cb)=>{
        db.query('SELECT * FROM prize WHERE id = ?', [id],
        (err, result)=>{
            if(err) return cb(err);
            cb(null, result[0]);
        })
    }
}

module.exports = lotteryModel;