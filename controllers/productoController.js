const Producto = require('../model/Producto')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Producto.find({}, (error, productos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los productos'
            })
        }
        return res.render('index', {productos: productos})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const productos = new Producto({
        producto: req.body.producto,
        marca: req.body.marca,
        tipo: req.body.tipo,
        stock: req.body.stock,        
        precio: req.body.precio
    })
    productos.save(function(error,producto){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el Producto'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const producto = req.body.producto_editar
    const marca = req.body.marca_editar
    const tipo = req.body.tipo_editar
    const stock = req.body.stock_editar
    const precio = req.body.precio_editar
    Producto.findByIdAndUpdate(id, {producto, marca, tipo, stock, precio}, (error, producto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Producto'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Producto.findByIdAndRemove(id, (error, producto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Producto'
            })
        }
        res.redirect('/')
    })
}