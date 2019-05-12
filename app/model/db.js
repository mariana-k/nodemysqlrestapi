'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'wi-projectdb.technikum-wien.at',
    user     : 'w18-bdl3-fst-11',
    password : 'DbPass4d411',
    database : 'w18-bdl3-fst-11'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;