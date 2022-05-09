const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productoSchema = new Schema ({
    producto: String,
    marca: String,
    tipo: String,
    stock: Number,
    precio: Number
}, {versionKey:false})
module.exports = mongoose.model('productos', productoSchema)