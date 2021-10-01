const express = require('express');
const router = express.Router();

//--> ruta de Registro
router.get('/users/signIn', (req, res) =>{
    res.render('users/signin')
})

//--> ruta de Logueo
router.get('/users/signUp', (req, res) =>{
    res.render('users/signup')
})

module.exports = router;