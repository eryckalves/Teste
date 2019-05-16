module.exports.database = () => {
    const mysql = require('mysql');

    const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "12345",
      database: "teste"
    });
    
   //conect Mysql
   con.connect((err) => {
    if (err) throw err;
    console.log("Conectado server SQL!");
    });

    return con;
}

//exec query
module.exports.call = (sql,con,callback) => {
    con.query(sql, function(err, results){
        if (err){ 
          throw err;
        }

        results.forEach(function(results){
          return callback(results);
        })
})
}