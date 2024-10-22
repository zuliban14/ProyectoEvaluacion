const pool =require('../../../../database/connexion');

async function crearcuestionario(params) {
    try {
        const{nombre, descripcion,  fecha_inicio, fecha_fin, id_preguntas, id_usuario, id_periodo_academico, estado}=params
        const query='insert into eva.cuestionarios (nombre, descripcion,  fecha_inicio, fecha_fin, id_preguntas, id_usuario, id_periodo_academico, estado)VALUES ($1,$2,,$4,$5,$6, $7, $8)';
        const result= await pool.query(query,[nombre, descripcion,  fecha_inicio, fecha_fin, id_preguntas, id_usuario, id_periodo_academico, estado]);
        console.log('respuesta', result.rows);
        
        return result.rows
    } catch (error) {
      console.log('error',error);
        
    }
    
}
async function buscarCuestionario(idcuestio) {
    try {
        const id = idcuestio;
        const query='select * from eva.cuestionarios where id=$1';
        const result= await pool.query(query,[id]);
        return result.rows.length>0;
    } catch (error) {
        console.log('error',error);
        
    }
    
}
async function eliminarcuestionario(params) {
    try {
        const id=params;
        const query='DELETE from eva.cuestionarios WHERE id=$1';
        const result= await pool.query(query,[id]);
        console.log('resultado', result);
        
        return result.rows
        
    } catch (error) {
        console.log('error', error);
        
    }
    
}
async function actulizarcuestionario(params) {
    try {
        const {id, nombre, descripcion, fecha_inicio, fecha_fin, id_preguntas, id_usuario, id_periodo_academico, estado}=params
        const query='UPDATE eva.cuestionarios set  nombre=$2, descripcion=$3, fecha_inicio=$4, fecha_fin=$5, id_preguntas=$6, id_usuario=$7, id_periodo_academico=$8, estado=$9 WHERE id=$1';
        const result=await pool.query(query,[id, nombre, descripcion,  fecha_inicio, fecha_fin, id_preguntas, id_usuario, id_periodo_academico, estado]);
        console.log('respuesta', result.rows);
        
        return result.rows

    } catch (error) {
        console.log('error',error);
        
    }
    
}
async function listarcuestionario(params) {
    try {
        const query='select * from eva.cuestionarios';
        const result= await pool.query(query);
        console.log('respuesta', result.rows);
        return result.rows
        
    } catch (error) {
        console.log('error', error);
        
    }
    
}

async function buscarperiodo(idperiodoacade) {
    try {
        const id=idperiodoacade
        const query='SELECT * FROM public.periodos_academicos WHERE id=$1';
        const result= await pool.query(query,[id])
        return result.rows.length>0;
    } catch (error) {
        
    }
}

module.exports={
    crearcuestionario,
    buscarCuestionario,
    eliminarcuestionario,
    actulizarcuestionario,
    listarcuestionario,
    buscarperiodo

}