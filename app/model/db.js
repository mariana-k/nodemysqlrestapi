'user strict';

var mysql = require('mysql');

//local mysql db connection
var pool = mysql.createPool({
    host     : 'wi-projectdb.technikum-wien.at',
    user     : 'w18-bdl3-fst-11',
    password : 'DbPass4d411',
    database : 'w18-bdl3-fst-11'
});



module.exports = pool;