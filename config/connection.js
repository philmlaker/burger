var mysql = require('mysql');

// exports.connection = mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	password:'',
// 	database:'employeeRegistry'
// });


var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });

connection.connect(function(err) {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }

        console.log("connected as id " + connection.threadId);

    });

module.exports = connection;
