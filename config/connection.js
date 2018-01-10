const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'oblivion',
        database : 'burgers_db'
    });
}

module.exports = connection;


