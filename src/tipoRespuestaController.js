// tipoRespuestaController.js
import pool from './db.js';

// Agregar un nuevo tipo de respuesta
export const agregarTipoRespuesta = async ({ tipo_respuesta, valor }) => {
  try {
    await pool.query('INSERT INTO tipo_respuesta (tipo_respuesta, valor) VALUES (?, ?)', [tipo_respuesta, valor]);
  } catch (error) {
    throw { status: 500, message: 'Error al crear el tipo de respuesta' };
  }
};

// Obtener todos los tipos de respuesta
export const listarTiposRespuesta = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM tipo_respuesta');
    return rows;
  } catch (error) {
    throw { status: 500, message: 'Error al obtener tipos de respuesta' };
  }
};

// Obtener detalles de un tipo de respuesta por ID
export const obtenerDetallesTipoRespuesta = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tipo_respuesta WHERE idtipo_respuesta = ?', [id]);

    if (rows.length === 1) {
      const tipoRespuesta = rows[0];
      return tipoRespuesta;
    } else {
      throw { status: 404, message: 'Tipo de respuesta no encontrado' };
    }
  } catch (error) {
    throw { status: 500, message: 'Error al obtener detalles del tipo de respuesta' };
  }
};

// Actualizar un tipo de respuesta por ID
export const actualizarTipoRespuesta = async (id, { tipo_respuesta, valor }) => {
  try {
    await pool.query('UPDATE tipo_respuesta SET tipo_respuesta = ?, valor = ? WHERE idtipo_respuesta = ?', [tipo_respuesta, valor, id]);
  } catch (error) {
    throw { status: 500, message: `Error al actualizar el tipo de respuesta con ID ${id}` };
  }
};

// Eliminar un tipo de respuesta por ID
export const eliminarTipoRespuesta = async (id) => {
  try {
    await pool.query('DELETE FROM tipo_respuesta WHERE idtipo_respuesta = ?', [id]);
  } catch (error) {
    throw { status: 500, message: `Error al eliminar el tipo de respuesta con ID ${id}` };
  }
};
