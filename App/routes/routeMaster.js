const express = require("express");
const login=require ('./login/auth')
const aspectos=require('./evaluacion/aspectosrutas');
const preguntas=require('./evaluacion/preguntasRutas');
const respuestas= require('./evaluacion/respuestasRutas');
const cuestionario=require('./evaluacion/cuestionarioRutas');

const router = express.Router();

//eportar cada uno de los modulos correspondientes en aqui
router.use("/login", login);
router.use("/aspectos", aspectos);
router.use("/preguntas", preguntas);
router.use("/respuestas", respuestas);
router.use("/cuestionario", cuestionario);

module.exports = router;