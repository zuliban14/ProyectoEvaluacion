//const express=require('express');
const Aspecto= require('../aspectos/aspectos.service');
const {response}=require('express');

const getAspectos=async(req, res= response)=>{
    const params=(req.body)
    const aspecto= await Aspecto.lisAapectos(params)
    res.json({
        ok:true,
        msg:'listado',
        aspecto
    });   
}
const buscarAspectos=async(req, res= response)=>{
  
    const aspectoid=(req.body)
    const aspecto= await Aspecto.buscarAspecto(aspectoid)
    res.json(aspecto);  
}

const crearAspectos= async(req, res= response)=>{
   console.log(req.body);

   try {
    const params=(req.body)
    const aspecto = await Aspecto.Aspectos(params)
   
    res.json({
        ok:true,
        msg:'aspecto creado',
        aspecto
    });
  
   } catch (error) {
    console.log(error);
    res.status(500).json({
        ok:false,
        msg:'no se pudo guardar aspecto '
    })
   }
}

const actualizarAspectos = async (req, res) => {

    try {
        const params=(req.body);
      const resultado = await Aspecto.actualizarAspectos(params);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Aspecto no encontrado' });
      }
      return res.json({ mensaje: 'Aspecto actualizado', data: resultado });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: 'Error al actualizar el aspecto' });
    }
  };

const eliminarAspectos= async(req, res= response)=>{
   try {
    const {params,idaspecto}=(req.body);
    
    const aspectoExiste=await Aspecto.buscarAspecto(idaspecto);
    if(!aspectoExiste){
        return res.status(404).json({ mensaje: 'Aspecto no encontrado' });
    }
    const resultado = await Aspecto.eliminarAspecto(params);
    return res.status(200).json({ mensaje: 'Aspecto eliminado', data: resultado });
  
    
   } catch (error) {
    console.error(error);
    
    res.status(500).json({
        msg:'no se elimino Aspectos'
    })
   }
}

module.exports={
   getAspectos,
    crearAspectos,
    actualizarAspectos,
    eliminarAspectos,
    buscarAspectos
}


