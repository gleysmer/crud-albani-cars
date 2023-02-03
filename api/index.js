const express= require('express');

const cors= require('cors');

// importamos la base de datos
const db= require('./database/db.js');

const router= require('./routes/routes.js');

const app= express();

app.use(cors());
app.use(express.json());

app.use('/', router)
// app.get('/', (req, res)=>{
//     res.send("hola mundo")
// })
try {
    db.authenticate()
    console.log("conexion exitosa de la base de datos")
   
} catch (error) {
    console.log(`el error de conexion es: ${error}`)
}

db.sync({ force: false}).then(() => {
    app.listen(3001, ()=>{
        console.log("runing on port 3001")
    })
})
