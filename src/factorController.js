// factorController.js
import pool from './db.js';

// Agregar un nuevo factor
export const agregarFactor = async ({ nombre_factor }) => {
  try {
    await pool.query('INSERT INTO factor (nombre_factor) VALUES (?)', [nombre_factor]);
  } catch (error) {
    throw { status: 500, message: 'Error al crear el factor' };
  }
};

// Obtener todos los factores
export const listarFactores = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM factor');
    return rows;
  } catch (error) {
    throw { status: 500, message: 'Error al obtener factores' };
  }
};

// Obtener detalles de un factor por ID
export const obtenerDetallesFactor = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM factor WHERE idfactor = ?', [id]);

    if (rows.length === 1) {
      const factor = rows[0];
      return factor;
    } else {
      throw { status: 404, message: 'Factor no encontrado' };
    }
  } catch (error) {
    throw { status: 500, message: 'Error al obtener detalles del factor' };
  }
};

// Actualizar un factor por ID
export const actualizarFactor = async (id, { nombre_factor }) => {
  try {
    await pool.query('UPDATE factor SET nombre_factor = ? WHERE idfactor = ?', [nombre_factor, id]);
  } catch (error) {
    throw { status: 500, message: `Error al actualizar el factor con ID ${id}` };
  }
};

// Eliminar un factor por ID
export const eliminarFactor = async (id) => {
  try {
    await pool.query('DELETE FROM factor WHERE idfactor = ?', [id]);
  } catch (error) {
    throw { status: 500, message: `Error al eliminar el factor con ID ${id}` };
  }
};
