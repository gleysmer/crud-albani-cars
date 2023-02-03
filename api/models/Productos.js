// importamos la conexion de la base de datos
const db = require('../database/db.js');

// importamos sequelize
const { DataTypes } = require('sequelize');

const productos= db.define('productos',{
    id: {

        type: DataTypes.INTEGER,
        primaryKey: true
        
    },
    nombre: {
        type: DataTypes.STRING
    },
    cantidad: {
        type: DataTypes.INTEGER
    },
    costo: {
        type: DataTypes.INTEGER
    }
})

module.exports= productos;