const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_DATABASE
});

db.connect(err => {
    if (err)
        throw new Error(err)
    
    console.log('db connected');
})

module.exports = db;