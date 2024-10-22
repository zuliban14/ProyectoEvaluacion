// Importar Express
const express = require('express');
require('dotenv').config();
const cors = require("cors");
const app = express();
const routeMaster = require("./App/routes/routeMaster");
//const routeMaster2 = require("./App/src/login/sesion-controller");
///lectura y parseo del body, se pasa todas las peticiones web
app.use(express.json());//las peticiones que se realizan en formato json 
//se extraen y su contenido 

app.use("/api", routeMaster);
//app.post("/sesion", routeMaster2.sesion); 

app.use(cors());



// Iniciar el servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${process.env.PORT}`);
});
