const express = require('express');
const router = express.Router();

//----> importar el archivo note
const Note = require('../models/note');

//----> Ruta para Ingresar Datos
router.get('/notes/add', (req, res) =>{
    res.render('notes/new_note');
})

//----> Ruta para capturar datos y enviarlos a la DB
router.post('/notes/new_note', async (req, res)=>{
    const { nombre, precio, marca } = req.body;
    const errors = [];
    if(!nombre){
        errors.push({text: 'Todos los campos son obligatorios'});
    }
    if(!precio){
        errors.push({text: 'Todos los campos son obligatorios'});
    }
    if(!marca){
        errors.push({text: 'Todos los campos son obligatorios'});
    }
    if(errors.length > 0){
        res.render('notes/new_note',{
            errors,
            nombre, 
            precio,
            marca
        });
    } else {
        const newNota = new Note({nombre, precio, marca});
        await newNota.save();
        res.redirect('/notes');
    }
});

router.get('/notes', async (req, res) =>{
    const notes = await Note.find();
    res.render('notes/all-notes', {notes});
});

module.exports = router;