const jwt = require('jsonwebtoken');

const generarJWT=(id, name)=>{
    return new Promise((resolve, reject)=>{
        const payload={id, name};
        jwt.sign(payload, process.env.SECRET_JWT_SEED,{
            expiresIn:'7d'
        }, (err, token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token')
            }
            resolve(token);
        })
    })

}


module.exports={
    generarJWT
}