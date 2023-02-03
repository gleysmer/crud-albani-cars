const { Sequelize } = require ('sequelize');

const db= new Sequelize('albaniCars','root','root',{
    host:'localhost',
    dialect:'mysql',
    logging: false
});


module.exports= db;