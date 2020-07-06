const mysql = require('mysql');


var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "goblinslayer",
    database: "apex",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('Connected to MySQL');
    }
    else {
        console.log('Connection failed to database');

    }
    console.log(err);

});

module.exports = mysqlConnection;