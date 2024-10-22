const {response} = require('express');
const service = require("../../src/login/sesion.service");
const {generarJWT}=require('../../../helpers/jwt');
//vamos a traer el resultado de la validacion del check y extraemos la funcion valideitonResult



//controladores de las rutas funciones
const crearUsuario= async (req, res=response) => {
    //para mostrar lo que trae nuestro body se tiene que haser middleware en el index
    console.log(req.body);///para ver en consola lo que trae el req en el body 
    /* const {name, email, password}=req.body; */
    const params =req.body;//desestructurar el body 

    const usuario = await service.sesion(params);
    res.send(usuario);
   
};


 
const sesion = async (req,res) => {
  try {
      const params = req.body;
      console.log('datos',params); 
      const usuario = await service.sesion(params);
      //res.send(usuario);
      //const token= await generarJWT(usuario.id, usuario.name);
     /* res.status(201).json({
        id:usuario.id,
        name:usuario.name,
        token 
      })*/
        res.json({
          ok:true,
          msg:'usuario',
          usuario
      });
  } catch (error) {
    res
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });       
  }
}

  const revalidarToken=async (req, res=response) => {
    const {id, name} = req; 
    
   // res.send('¡Hola, llego teken !');
   const token = await generarJWT(id, name)
    res.json({
      ok:true,
      id,
      name,
      token
    })
  };


  module.exports={
    crearUsuario,
    sesion,
    revalidarToken

  }