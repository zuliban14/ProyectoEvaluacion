const {Router} = require('express');
const router = Router();
const {getPreguntas,crearPreguntas,actualizarPreguntas,eliminarPreguntas}=require('../../src/evaluacion/preguntas/preguntas');
const {check}= require('express-validator');
const { validarCampos } = require('../../../middlewares/validarcampos');

router.get('/', getPreguntas);
router.post('/',
    [
        check('titulo', 'El titulo es obligatorio').not().isEmpty(),
        check('subtitulo', 'Ingresar el subtitulo').not().isEmpty(),
        check('imagen', 'no hay imagen'),
        check('valor', 'Debe de ingresar el valor').not().isEmpty(),
        check('id_aspectos', 'Debe seleccionar el aspecto a evaluar').not().isEmpty(),
        check('id_tipo_pregunta', 'Debe selecionar el tipo de pregunta').not().isEmpty(),
        check('orden', 'que orden tiene su pregunta').not().isEmpty(),
        check('estado', 'que estado se encuntra').not().isEmpty(),
        validarCampos

    ],
     crearPreguntas);
router.put('/:id', actualizarPreguntas);
router.delete('/:id', eliminarPreguntas);

module.exports=router;