// cuestionarioController.js
import pool from './db.js';

// Agregar un nuevo cuestionario
export const agregarCuestionario = async ({ nombre_cuestionario }) => {
  try {
    await pool.query(
      'INSERT INTO cuestionario (nombre_cuestionario) VALUES (?)',
      [nombre_cuestionario]
    );
  } catch (error) {
    throw { status: 500, message: 'Error al crear el cuestionario' };
  }
};

// Obtener todos los cuestionarios
export const listarCuestionarios = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM cuestionario');
    return rows;
  } catch (error) {
    throw { status: 500, message: 'Error al obtener cuestionarios' };
  }
};

// Obtener detalles de un cuestionario por ID
export const obtenerDetallesCuestionario = async (id) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM cuestionario WHERE idcuestionario = ?',
      [id]
    );

    if (rows.length === 1) {
      const cuestionario = rows[0];
      return cuestionario;
    } else {
      throw { status: 404, message: 'Cuestionario no encontrado' };
    }
  } catch (error) {
    throw { status: 500, message: 'Error al obtener detalles del cuestionario' };
  }
};

// Actualizar un cuestionario por ID
export const actualizarCuestionario = async (id, { nombre_cuestionario }) => {
  try {
    await pool.query(
      'UPDATE cuestionario SET nombre_cuestionario = ? WHERE idcuestionario = ?',
      [nombre_cuestionario, id]
    );
  } catch (error) {
    throw { status: 500, message: `Error al actualizar el cuestionario con ID ${id}` };
  }
};

// Eliminar un cuestionario por ID
export const eliminarCuestionario = async (id) => {
  try {
    await pool.query('DELETE FROM cuestionario WHERE idcuestionario = ?', [id]);
  } catch (error) {
    throw { status: 500, message: `Error al eliminar el cuestionario con ID ${id}` };
  }
};
