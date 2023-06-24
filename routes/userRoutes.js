const express = require("express");

const router = express.Router();

const path = require ('path');

// Controller

const userControllers = require("../controllers/userControllers");

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware.js');
const validations = require('../middlewares/validateRegisterMiddleware.js');


// Formulario de login
router.get('/login', userControllers.getLogin);

// Procesar el login
router.post('/login', userControllers.processLogin);

// Formulario de registro
router.get('/register', userControllers.getRegister);
router.get('/registerAliados', userControllers.getRegisterAliados);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, userControllers.processRegister);

// Perfil de usuario

router.get('/perfilCliente', userControllers.clientProfile);
router.get('/perfilAliado', userControllers.getAliadoProfile);

module.exports = router;
