const pool = require('../../../database/connexion');

async function sesion(params) {
    try {
  
      const name = params.nombre_usuario;
      const contra = params.clave_acceso;
       
      const response = await pool.query(`
      select * from public.usuarios where nombre_usuario = $1 and  clave_acceso = $2
      `,[name,contra]
      );
      console.log('services datos', name, contra);

      if(response.rows.length==0){
        return 'no se encontro usuario';
      }else{
        return true;

      }
  
    } catch (e) {
      throw error;
    }
  };

  async function buscarusuario(usuario) {
    try {
      const id=usuario;
      const query='SELECT * from public.usuarios where id=$1';
      const result= await pool.query(query,[id]);
      //console.log('respuesta',result.rows);
      
      return result.rows.length > 0;
    } catch (error) {
      console.log('error', error);
      
    }
    
  }


  module.exports = {
    sesion, 
    buscarusuario
  }