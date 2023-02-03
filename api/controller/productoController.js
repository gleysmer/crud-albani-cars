const productos= require('../models/Productos.js');


//  metodos para el crud

// traer productos

const getAllproductos= async (req, res)=>{
    try {
       const result= await productos.findAll();
       if(result){
        res.json(result).status(200);
       }else{
        res.status(404)
       }
    } catch (error) {
        res.json({message: error.message})
    }
}
    //  buscar producto por id
const getByIDProducto= async (req, res)=>{
    try {
        const producto = await productos.findAll({
            where: { id: req.params.id}
        });
        if(producto){
            res.json(producto).status(200);
           }else{
            res.status(404)
           }
    } catch (error) {
        res.json({message: error.message})
        
    }
};

// crear producto
const createProducto= async (req, res)=>{
    try {
         await productos.create(req.body)
         res.json({
            "message": "producto creado con exito"
         }).status(200)
    } catch (error) {

        res.json({message: error.message})
    }
    
};

// actualizar producto

const updateProducto= async (req, res)=>{
    try {
        await productos.update(req.body, {
            where: { id: req.params.id}
        });
        res.json({
            "message": "producto actualizado con exito"
         }).status(200)

    } catch (error) {
        res.json({message: error.message})
    }
};

// eliminar registro

const deleteProducto= async (req, res)=>{
    try {
        await productos.destroy({
            where: { id: req.params.id}
        });
        res.json({
            "message": "producto eliminado con exito"
         }).status(200)

    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports= {
    getAllproductos,
    getByIDProducto,
    createProducto,
    updateProducto,
    deleteProducto
};