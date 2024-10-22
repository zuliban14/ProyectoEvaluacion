const {Router} = require('express');
const {check}= require('express-validator');
const { getRespuestas, crearRespuestas, actualizarRespuestas, eliminarRespuestas } = require('../../src/evaluacion/respuestas/respuestas');
const { validarCampos } = require('../../../middlewares/validarcampos');

const router = Router();

router.get('/', getRespuestas);
router.post('/',
    [
        check('nombre', 'El titulo es obligatorio').not().isEmpty(),
        check('imagen', 'El titulo es obligatorio').not().isEmpty(),
        check('valor', 'El valor de la pregunta es obligatoria').not().isEmpty(),
        check('id_preguntas', 'se debe seleccionara la pregunta').not().isEmpty(),
        check('estado', 'estado ').not().isEmpty(),
        validarCampos 
    ]
    , crearRespuestas);
router.put('/:id', actualizarRespuestas);
router.delete('/:id', eliminarRespuestas);

module.exports=router;