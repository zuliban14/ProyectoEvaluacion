const {response}=require('express');
const Pregunta = require('../preguntas/preguntas.service');
const service = require("../../../src/login/sesion.service");
const Cuestionario=require('../cuestionario/cuestionario.service');

const getCuestionario=async(req=response, res)=>{
    try {
        const params=req.body;
        const resul = await Cuestionario.listarcuestionario(params);
        return res.status(202).json({msg:'listado cuestionario',data:resul})
        
    } catch (error) {
        res.status(404).json({
            ok:false,
            msg:'no lis cuestionario' })
    }
   

}

const crearCuestionario=async(req=response, res)=>{
    try {
        const params=req.body;
        const preguntaid=params.id_preguntas;
        const usuario=params.id_usuario;
        const idperiodoacade=params.id_periodo_academico;
        const existepregunt= await Pregunta.buscarpregunta(preguntaid);
        const existeusuario= await service.buscarusuario(usuario);
        const existeperiodo= await Cuestionario.buscarperiodo(idperiodoacade);
        if(!existepregunt){
            return res.status(404).json({msg:'no valido id pregunta'})
        }
        if (!existeusuario) {
            return res.status(404).json({msg:'no valido usuario'})
        }
        if (!existeperiodo) {
            return res.status(404).json({msg:'no valido periodo'})
        }
        const result = await Cuestionario.crearcuestionario(params);
        return res.status(202).json({msg:'creado cuestionario',data:result})
        
    } catch (error) {
        console.log('error',error);
        
        res.status(404).json({
            ok:false,
            msg:'no se creao cuestionarios'

        }) 
    }
    
}

const actualizarCuestionario=async(req=response, res)=>{
    try {
        const params=req.body;
        const idcuestio=params.id;
        const preguntaid=params.id_preguntas;
        const usuario=params.id_usuario;
        const idperiodoacade=params.id_periodo_academico;
        const existecuestio= await Cuestionario.buscarCuestionario(idcuestio);
        const existepregunt= await Pregunta.buscarpregunta(preguntaid);
        const existeusuario= await service.buscarusuario(usuario);
        const existeperiodo= await Cuestionario.buscarperiodo(idperiodoacade);
        if (!existecuestio) {
            return res.status(404).json({msg:'no valido id cuestionario'})
        }
    
        if(!existepregunt){
            return res.status(404).json({msg:'no valido id pregunta'})
        }
        if (!existeusuario) {
            return res.status(404).json({msg:'no valido usuario'})
        }
        if (!existeperiodo) {
            return res.status(404).json({msg:'no valido periodo'})
        }
        const result = await Cuestionario.actulizarcuestionario(params);
        return res.status(202).json({msg:'actualizado cuestionario',data:result}) 
        
    } catch (error) {
        console.log('error',error);
        res.json({
            ok:false,
            msg:'actualizarcuestionario'
        })
    }
   
}
 const eliminarCuestionario=async(req=response, res)=>{
    try {
        const params=req.body;
        const idcuestio=params.id;
        const existeCuestio= await Cuestionario.buscarCuestionario(idcuestio);
        if (!existeCuestio) {
            return res.status(404).json({msg:'no valido custionario'})    
        }
        const result= await Cuestionario.eliminarcuestionario(idcuestio);
        return res.status(200).json({msg:'eliminado', data:result})
        
    } catch (error) {
        res.json({
            ok:false,
            msg:'eliminarcuestionario'
        })
    }
    
 }

 module.exports={
    crearCuestionario,
    getCuestionario,
    actualizarCuestionario,
    eliminarCuestionario
 }