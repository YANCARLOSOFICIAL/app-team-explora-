// preguntaController.js
import pool from './db.js';

// Agregar una nueva pregunta
export const agregarPregunta = async ({ pregunta, idfactor }) => {
  try {
    await pool.query('INSERT INTO pregunta (pregunta, idfactor) VALUES (?, ?)', [pregunta, idfactor]);
  } catch (error) {
    throw { status: 500, message: 'Error al crear la pregunta' };
  }
};

// Obtener todas las preguntas
export const listarPreguntas = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM pregunta');
    return rows;
  } catch (error) {
    throw { status: 500, message: 'Error al obtener preguntas' };
  }
};

// Obtener detalles de una pregunta por ID
export const obtenerDetallesPregunta = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM pregunta WHERE idpregunta = ?', [id]);

    if (rows.length === 1) {
      const pregunta = rows[0];
      return pregunta;
    } else {
      throw { status: 404, message: 'Pregunta no encontrada' };
    }
  } catch (error) {
    throw { status: 500, message: 'Error al obtener detalles de la pregunta' };
  }
};

// Actualizar una pregunta por ID
export const actualizarPregunta = async (id, { pregunta, idfactor }) => {
  try {
    await pool.query('UPDATE pregunta SET pregunta = ?, idfactor = ? WHERE idpregunta = ?', [pregunta, idfactor, id]);
  } catch (error) {
    throw { status: 500, message: `Error al actualizar la pregunta con ID ${id}` };
  }
};

// Eliminar una pregunta por ID
export const eliminarPregunta = async (id) => {
  try {
    await pool.query('DELETE FROM pregunta WHERE idpregunta = ?', [id]);
  } catch (error) {
    throw { status: 500, message: `Error al eliminar la pregunta con ID ${id}` };
  }
};
