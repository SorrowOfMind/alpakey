const mysql = require('mysql');

const db = mysql.createConnection({
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // database: process.env.DB_DATABASE

    host: 'localhost',
    user: 'root',
    password: 'Ether1147',
    database: 'alpakey'
});

db.connect(err => {
    if (err)
        throw new Error(err)
    
    console.log('db connected');
})

module.exports = db;