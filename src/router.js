// router.js
import express from 'express';
import {
  agregarCuestionario,
  listarCuestionarios,
  obtenerDetallesCuestionario,
  actualizarCuestionario,
  eliminarCuestionario,
} from './cuestionarioController.js';

import {
  agregarFactor,
  listarFactores,
  obtenerDetallesFactor,
  actualizarFactor,
  eliminarFactor,
} from './factorController.js';

import {
  agregarPregunta,
  listarPreguntas,
  obtenerDetallesPregunta,
  actualizarPregunta,
  eliminarPregunta,
} from './preguntaController.js';

import {
  agregarTipoRespuesta,
  listarTiposRespuesta,
  obtenerDetallesTipoRespuesta,
  actualizarTipoRespuesta,
  eliminarTipoRespuesta,
} from './tipoRespuestaController.js';

import {
  agregarRespuestaPregunta,
  listarRespuestasPreguntas,
  obtenerDetallesRespuestaPregunta,
  actualizarRespuestaPregunta,
  eliminarRespuestaPregunta,
} from './respuestaPreguntaController.js';

const router = express.Router();

// Rutas para Cuestionarios
router.post('/cuestionarios', agregarCuestionario);
router.get('/cuestionarios', listarCuestionarios);
router.get('/cuestionarios/:id', obtenerDetallesCuestionario);
router.put('/cuestionarios/:id', actualizarCuestionario);
router.delete('/cuestionarios/:id', eliminarCuestionario);

// Rutas para Factores
router.post('/factores', agregarFactor);
router.get('/factores', listarFactores);
router.get('/factores/:id', obtenerDetallesFactor);
router.put('/factores/:id', actualizarFactor);
router.delete('/factores/:id', eliminarFactor);

// Rutas para Preguntas
router.post('/preguntas', agregarPregunta);
router.get('/preguntas', listarPreguntas);
router.get('/preguntas/:id', obtenerDetallesPregunta);
router.put('/preguntas/:id', actualizarPregunta);
router.delete('/preguntas/:id', eliminarPregunta);

// Rutas para Tipos de Respuesta
router.post('/tipos_respuesta', agregarTipoRespuesta);
router.get('/tipos_respuesta', listarTiposRespuesta);
router.get('/tipos_respuesta/:id', obtenerDetallesTipoRespuesta);
router.put('/tipos_respuesta/:id', actualizarTipoRespuesta);
router.delete('/tipos_respuesta/:id', eliminarTipoRespuesta);

// Rutas para Respuestas a Preguntas
router.post('/respuestas_pregunta', agregarRespuestaPregunta);
router.get('/respuestas_pregunta', listarRespuestasPreguntas);
router.get('/respuestas_pregunta/:id', obtenerDetallesRespuestaPregunta);
router.put('/respuestas_pregunta/:id', actualizarRespuestaPregunta);
router.delete('/respuestas_pregunta/:id', eliminarRespuestaPregunta);

export default router;
