const mysql = require('mysql');

module.exports = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'oblivion',
    database : 'burgers_db'
});

