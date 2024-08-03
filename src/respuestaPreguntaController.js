// respuestaPreguntaController.js
import pool from './db.js';

// Agregar una nueva respuesta a pregunta
export const agregarRespuestaPregunta = async ({ idcuestionario, idpregunta, idtipo_respuesta }) => {
  try {
    await pool.query('INSERT INTO respuesta_pregunta (idcuestionario, idpregunta, idtipo_respuesta) VALUES (?, ?, ?)', [idcuestionario, idpregunta, idtipo_respuesta]);
  } catch (error) {
    throw { status: 500, message: 'Error al crear la respuesta a la pregunta' };
  }
};

// Obtener todas las respuestas a preguntas
export const listarRespuestasPreguntas = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM respuesta_pregunta');
    return rows;
  } catch (error) {
    throw { status: 500, message: 'Error al obtener respuestas a preguntas' };
  }
};

// Obtener detalles de una respuesta a pregunta por ID
export const obtenerDetallesRespuestaPregunta = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM respuesta_pregunta WHERE idrespuesta_pregunta = ?', [id]);

    if (rows.length === 1) {
      const respuestaPregunta = rows[0];
      return respuestaPregunta;
    } else {
      throw { status: 404, message: 'Respuesta a pregunta no encontrada' };
    }
  } catch (error) {
    throw { status: 500, message: 'Error al obtener detalles de la respuesta a la pregunta' };
  }
};

// Actualizar una respuesta a pregunta por ID
export const actualizarRespuestaPregunta = async (id, { idcuestionario, idpregunta, idtipo_respuesta }) => {
  try {
    await pool.query('UPDATE respuesta_pregunta SET idcuestionario = ?, idpregunta = ?, idtipo_respuesta = ? WHERE idrespuesta_pregunta = ?', [idcuestionario, idpregunta, idtipo_respuesta, id]);
  } catch (error) {
    throw { status: 500, message: `Error al actualizar la respuesta a la pregunta con ID ${id}` };
  }
};

// Eliminar una respuesta a pregunta por ID
export const eliminarRespuestaPregunta = async (id) => {
  try {
    await pool.query('DELETE FROM respuesta_pregunta WHERE idrespuesta_pregunta = ?', [id]);
  } catch (error) {
    throw { status: 500, message: `Error al eliminar la respuesta a la pregunta con ID ${id}` };
  }
};
