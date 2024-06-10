const express = require('express');
const router = express.Router();
const UserController = require('./controller');

router.get('/usuarios', UserController.getUsers)
router.get('/usuario/:apellido', UserController.seachUser)
router.post('/usuario', UserController.insertUser)
router.post('/actualizarUsuario/:id', UserController.updateUser)
router.post('/borrarUsuario/:id', UserController.deleteUser)


router.get('/crearNuevoUsuario', UserController.insertUserView);
router.get('/actualizarUsuario/:id', UserController.updateUserView);


module.exports = router