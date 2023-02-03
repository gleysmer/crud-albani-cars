const express= require('express');
const {
    getAllproductos, getByIDProducto, createProducto, updateProducto, deleteProducto} = require('../controller/productoController');

const router= express.Router();


router.get('/productos', getAllproductos);
router.get('/producto/:id', getByIDProducto);
router.post('/create', createProducto);
router.put('/actualizarProducto/:id', updateProducto);
router.delete('/eliminarProducto/:id', deleteProducto)


module.exports= router;