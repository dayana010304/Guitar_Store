//----> Archivo para guardar datos en DB
const mongoose = require ('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema({
    nombre: {type: String, required: true}, 
    precio: { type: String, required: true},
    marca: { type: String, required: true}
})

module.exports = mongoose.model('notes', NoteSchema)