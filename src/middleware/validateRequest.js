/**
 * Middleware para validar datos de entrada
 */

const validateContacto = (req, res, next) => {
  const { nombre, apellido, telefono } = req.body;

  const errors = [];

  if (!nombre || typeof nombre !== 'string' || nombre.trim() === '') {
    errors.push('El campo "nombre" es requerido y debe ser un texto válido');
  }

  if (!apellido || typeof apellido !== 'string' || apellido.trim() === '') {
    errors.push('El campo "apellido" es requerido y debe ser un texto válido');
  }

  if (!telefono || typeof telefono !== 'string' || telefono.trim() === '') {
    errors.push('El campo "telefono" es requerido y debe ser un texto válido');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  next();
};

module.exports = { validateContacto };
