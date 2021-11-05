const db = require('../db');

const commentModel = {
    getAll: (cb)=>{
        db.query(
            `SELECT u.nickname, c.id, c.content, c.username
            FROM comments as c
            LEFT JOIN user as u
            ON c.username = u.username
            ORDER BY c.id DESC
            LIMIT 4
            `, (err, result)=>{
                if (err) return cb(err);
                cb(null, result);
            })
    },
    add: (username, content, cb)=>{
        db.query('INSERT INTO comments (username, content) VALUES(?,?)',[username, content],
        (err)=>{
            if(err) return cb(err);
            cb(null);
        })
    },
    get: (id, username, cb)=>{
        db.query('SELECT * FROM comments WHERE id = ? AND username = ?', [id, username],
        (err, result)=>{
            if(err) return cb(err);
            cb(null, result[0]);
        })
    },
    update: (id, username, content, cb)=>{
        db.query('UPDATE comments SET content = ? WHERE id = ? AND username = ?',[content, id, username],
        (err, result)=>{
            if(err) return cb(err);
            cb(null, result);
        })
    },
    delete: (id, username, cb)=>{
        db.query('DELETE FROM comments WHERE id = ? AND username = ?',[id, username],
        (err, result)=>{
            if(err) return cb(err);
            cb(null, result);
        })
    },
    pagination: (id, cb)=>{
        const limit = 5;
        db.query(`SELECT c.id, c.username, c.content, u.nickname
        FROM comments as c
        LEFT JOIN user as u ON c.username = u.username
        WHERE c.id < ? 
        ORDER BY c.id DESC LIMIT ?`, 
        [id, limit],
        (err, result)=>{
            if(err) return cb(err);
            cb(null, result);
        })
    }
}

module.exports = commentModel;