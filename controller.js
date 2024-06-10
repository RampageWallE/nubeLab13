const  { db } = require('./database');

const getUsers = async (req, res) => {
    try{
        const sentence = 'SELECT * FROM lab13'; 
        // db.connect();
        db.query(sentence, (err, results) => {
            // console.log(results[0].nombre)
            if( err ){
                res.status(500).send(err);
            }else{
                res.status(200).render('index', {results});
                // res.status(200).send(results);
            }
        })
    }catch(err){
        throw err;
    }finally{
        // db.end();
    }
}

const seachUser = async (req, res) => {
    try{
        const {apellido} = req.params
        const sentence = 'SELECT * FROM lab13 WHERE LOWER(apellido) = LOWER(?)'; 
        // db.connect();
        db.query(sentence, [apellido] ,(error, results) => {
            // console.log(results[0].nombre)
            if( error ){
                res.status(500).send(error);
            }else{
                res.status(200).send(results);
            }
        })
    }catch(err){
        console.log(err);
    }finally{
        // db.end();
    }
}

const insertUserView = (req, res) => {
    res.status(200).render('createUser')
}

const insertUser = async (req, res) => {
    try{
        data = req.body;
        const sentence = 'INSERT INTO lab13 (id, nombre, apellido, correo, fecha_nac, foto) VALUES (?, ?, ?, ?, ?, ?)'
        // db.connect();
        db.query(sentence, [data.id, data.nombre, data.apellido, data.correo, data.fecha_nac, data.foto] ,(error, results) => {
            if(error){
                res.status(500).send(error);
            }else{
                res.status(201).redirect('/usuarios');
            }
        })
    }catch(err){
        throw err;
    }finally{
        // db.end();
    }
}


const updateUserView = (req, res) => {
    try{
        const { id } = req.params
        const sentence = 'SELECT * FROM lab13 where id = ?; '
        db.query(sentence, [id], (error, results) => {
            if(error){
                res.status(500).send(error)
                }else{
                console.log(results[0])
                res.status(200).render('modifyUser', results[0])
                }
        })
    }catch(err){
        console.log(err)
    }finally{
        
    }
    
}

const updateUser = async(req, res) => {
    try{
        const { id } = req.params
        const data = req.body
        const sentence = 'UPDATE lab13 set nombre = ?, apellido = ?, correo = ?, fecha_nac = ?, foto = ? where id = ? '
        db.query(sentence, [data.nombre, data.apellido, data.correo, data.fecha_nac, data.foto, id], (error, results) => {
            if(error){
                res.status(500).send(error)
            }else{
                res.status(200).send(results)
            }
        })
    }catch(err){
        console.log(err)
    }finally{
        
    }
}

const deleteUser = (req, res) => {
    try{
        const { id } = req.params;
        const sentence = 'DELETE FROM lab13 where id = ?'
        db.query(sentence, [id], (err, results)=> {
            if(err){
                console.log("You have some troubles" + err );
            }else{
                console.log(results)
                res.status(201).redirect('/usuarios')
            }

        })
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports = {
    getUsers,
    insertUser,
    seachUser,
    updateUser,
    insertUserView,
    updateUserView,
    deleteUser
}