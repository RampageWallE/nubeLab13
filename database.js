const mysql = require('mysql');

const db =  mysql.createConnection({
    // connectionLimit: 200,
    host: 'laboratorio13.czuk0gsw436v.sa-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'admin123',
    database: 'laboratorio13'
})

// async function conectar (){
//     try{
//         db.connect();
//         db.query('select * from lab13', function(error, results, fields){
//             if(error) throw error;
//             console.log(results[0].nombre)
//         })
//     }catch(err){
//         console.log('TIENES ERRORES:\n' + err )
//     }finally{
//         db.end();
//         console.log('Se termino la conexion')
//     }
// }
module.exports = {
    db
};


