const { Router } = require("express")

const router=Router();
const{getCuestionario,crearCuestionario,actualizarCuestionario,eliminarCuestionario}=require('../../src/evaluacion/cuestionario/cuestionarios');
const {check}=require('express-validator');
const {validarCampos}=require('../../../middlewares/validarcampos');
const { isDate } = require("../../../helpers/isDate");


router.get('/', getCuestionario);
router.post('/',
    [
        check('nombre', 'El titulo es obligatorio').not().isEmpty(),
        check('descripcion', 'ingresa la descripcion').not().isEmpty(),
        //check('fecha_creacion', 'fecha creacion').not().isEmpty(),
        check('fecha_inicio', 'Fecha de inicio es requerida y debe ser una fecha válida').custom(isDate),
        check('fecha_fin', 'fecha fin de evaluacion').custom(isDate),
        check('id_preguntas', 'pregunta').not().isEmpty(),
        check('id_usuario', 'usuario').not().isEmpty(),
        check('id_periodo_academico', 'periodo academico').not().isEmpty(),
        check('estado', 'Estado de la encuesta').not().isEmpty(),
        validarCampos
    ],
     crearCuestionario);
router.put('/:id', actualizarCuestionario);
router.delete('/:id', eliminarCuestionario);

module.exports=router;

