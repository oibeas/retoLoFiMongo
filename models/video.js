const { log } = require('debug');
const mongoose = require('mongoose'); //lo requiero
const Schema = mongoose.Schema; //me traigo la clase

// creamos un objeto de esta clase
const videoSchema = new Schema({
    titulo: String,
    autor: String,
    canal: String,
    usuario: String,
    video: String,
    imagen: String,
    duracion: String,
    rango: Number,

});

// videoSchema.virtual('numeroId').get(function () {
//     return this.rango.$toInt
// });



module.exports = mongoose.model('video', videoSchema);