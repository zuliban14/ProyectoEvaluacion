const pool = require('../../../../database/connexion');

async function crearPregunta(params) {
    try {
        const{titulo, subtitulo, imagen, valor, id_aspectos, id_tipo_pregunta, orden, estado}=params;
        const query='insert into eva.preguntas(titulo, subtitulo, imagen, valor,  id_aspectos, id_tipo_pregunta, orden, estado) values ($1, $2, $3, $4, $5, $6, $7, $8)';
        const resultado= await pool.query(query, [titulo, subtitulo, imagen, valor, id_aspectos, id_tipo_pregunta, orden, estado]);
        console.log('respuesta', resultado.rows);
        return resultado.rows;
        
    } catch (error) {
        console.log('error',error);
    }
 
}

async function buscartipopregunta(params) {
    try {
        const query=`select * from eva.tipo_preguntas where id=$1`;
        const resultado= await pool.query(query,[params]);
        return resultado.rows.length > 0;
        
    } catch (error) {
        console.log('error',error);
        return false;
    }
}

async function buscarpregunta(preguntaid) {
    try {
        const id=preguntaid
        const query=`select * from eva.preguntas where id=$1`;
        const resultado = await pool.query(query,[id]);
        return resultado.rows.length>0;
        
    } catch (error) {
        console.log('error',error);
        return false;
    }
    
}

async function listapregunta(params) {
    try {
        const query=`select * from eva.preguntas`;
        const resultado = await pool.query(query);
        return resultado.rows;
        
    } catch (error) {
        
    }
    
}

async function actualizarPregunta(params) {
    try {
        const{id, titulo, subtitulo, imagen, valor, id_aspectos, id_tipo_pregunta, orden, estado}=params;
        const query='UPDATE eva.preguntas set titulo=$2, subtitulo=$3, imagen=$4, valor=$5,  id_aspectos=$6, id_tipo_pregunta=$7, orden=$8, estado=$9 where id=$1 RETURNING *'
        const result=await pool.query(query,[id,titulo, subtitulo, imagen, valor, id_aspectos, id_tipo_pregunta, orden, estado])
        console.log('respuesta', result.rows);
        return result.rows;
    } catch (error) {
        console.log('error',error);
    }
    
}
async function eliminarPregunta(params) {
    try {
        const{id}=params;
        const query='DELETE FROM eva.preguntas WHERE id = $1';
        const result= await pool.query(query,[id])

        return result.rows

    } catch (error) {
        console.log('error',error);
    }
    
}

module.exports={
    crearPregunta,
    actualizarPregunta,
    eliminarPregunta,
    buscartipopregunta,
    listapregunta,
    buscarpregunta
}