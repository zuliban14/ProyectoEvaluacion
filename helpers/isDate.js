//se instala el moment para para validar fechas 
const moment = require('moment');

const isDate=(value)=>{
    if (!value){
        return false;

    }
    const fecha=moment(value, moment.ISO_8601, true);
    if (fecha.isValid()){
        return true;

    }else {
        return false;
    }

}

module.exports={isDate};