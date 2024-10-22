const { Router} = require("express");
const router =Router();
const {check}=require('express-validator');
const { validarCampos } = require('../../../middlewares/validarcampos');

const {validarJWT}= require('../../../middlewares/validarjwt')
const {getAspectos,crearAspectos,actualizarAspectos,eliminarAspectos, buscarAspectos}=require('../../src/evaluacion/aspectos/aspectos');

//router.use(validarJWT);// se valida en todas las rutas 

router.get('/', buscarAspectos);
router.post('/',
   [
      check('nombre', 'El titulo es obligatorio').not().isEmpty(),
      
     check('descripcion', 'la descripcion es obligatoria').not().isEmpty(),
     check('estado')
     .optional({ checkFalsy: true }) // Esto permite campos opcionales o valores "falsos" como ""
     .isBoolean().withMessage('El campo activo debe ser booleano.'),
      validarCampos
  ],
     crearAspectos);
router.put('/:id',  actualizarAspectos);
router.delete('/:id', eliminarAspectos);

module.exports = router;