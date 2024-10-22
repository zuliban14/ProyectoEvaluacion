const { query } = require('express');
const pool = require('../../../../database/connexion');

async function crearRespuesta(params) {
    try {
        const {nombre, imagen, valor, id_preguntas, estado}=params;
        const query='insert into eva.tipo_respuestas (nombre, imagen, valor, id_preguntas, estado) values ($1, $2, $3, $4, $5::boolean)';
        const result = await pool.query(query,[nombre, imagen, valor, id_preguntas, estado]);
        console.log('espuesta', result.rows);
        
        return result.rows;
        
    } catch (error) {
        console.log('error',error);
    }
}
async function listarRespuestas(params) {
    try {
        const query='select nombre, imagen, valor from eva.tipo_respuestas';
        const result= await pool.query(query)
        console.log('respuesta',result.rows);
        return result.rows;
        
    } catch (error) {
        console.log('error',error);
    }
    
}
async function buscarRespuesta(idrespuesta) {
    try {
        const id=idrespuesta;
        const query='select * from eva.tipo_respuestas where id=$1';
        const result=await pool.query(query,[id]);
        console.log('respuesta', result.rows);
        
        return result.rows
        
    } catch (error) {
        console.log('error',error);
    }
    
}

async function actualizarRespuestas(params) {
    try {
        const{id, nombre, imagen, valor, id_preguntas, estado} =params;
        const query='UPDATE eva.tipo_respuestas SET nombre=$2, imagen=$3, valor=$4, id_preguntas=$5, estado=$6 where id=$1 RETURNING *';
        const result= await pool.query(query,[id, nombre, imagen, valor, id_preguntas, estado]);
        console.log('respuesta',result.rows);
        
        return result.rows
        
    } catch (error) {
        console.log('error',error);
    }
    
}

async function eliminarRespuesta(idrespuesta) {
    try {
        
        const query='delete  from eva.tipo_respuestas WHERE id=$1';
        const result=await pool.query(query,[idrespuesta]);
        console.log('respuesta', result.rows);
        
        return result.rows;
        
    } catch (error) {
        console.log('error',error);
    }
}

module.exports={
    actualizarRespuestas,
    crearRespuesta,
    listarRespuestas,
    buscarRespuesta,
    eliminarRespuesta
}