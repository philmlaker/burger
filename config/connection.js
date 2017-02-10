var mysql = require('mysql');

// exports.connection = mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	password:'',
// 	database:'employeeRegistry'
// });

exports.connection = function connect() {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employeeRegistry'
    });


    connection.connect(function(err) {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }

        console.log("connected as id " + connection.threadId);

    });
}
