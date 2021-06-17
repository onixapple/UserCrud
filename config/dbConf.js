const mysql = require('mysql');

//create my sql connection

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'users'
})

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!');
})

module.exports = dbConn;