var mysql = require('mysql');

function createDbConnection(){        
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'rob220990',
            database: 'casadocodigo'
        });
}

module.exports = function(){
    return createDbConnection;
}