const express = require('express');
const router = express.Router();


//--> ruta INDEX
router.get('/', (req, res) =>{
    res.render('index.hbs')
})

//--ruta ABOUT
router.get('/about', (req, res) =>{
    res.render('about.hbs')
})

module.exports = router;