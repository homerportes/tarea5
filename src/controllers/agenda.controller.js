const Contacto = require('../models/contacto.model');

/**
 * Base de datos en memoria para almacenar contactos
 * En producción, esto sería reemplazado por una base de datos real
 */
let contactos = [
  {
    nombre: 'Juan',
    apellido: 'Pérez',
    telefono: '809-555-1234'
  },
  {
    nombre: 'María',
    apellido: 'García',
    telefono: '829-555-5678'
  },
  {
    nombre: 'Pedro',
    apellido: 'Martínez',
    telefono: '849-555-9012'
  }
];

/**
 * Obtener todos los contactos
 * @route GET /agenda
 */
const obtenerContactos = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: contactos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener los contactos'
    });
  }
};

/**
 * Agregar un nuevo contacto
 * @route POST /agenda
 */
const agregarContacto = (req, res) => {
  try {
    const { nombre, apellido, telefono } = req.body;

    // Crear nueva instancia del modelo
    const nuevoContacto = new Contacto(nombre, apellido, telefono);

    // Validar el contacto
    const validacion = nuevoContacto.validar();
    if (!validacion.valid) {
      return res.status(400).json({
        success: false,
        errors: validacion.errors
      });
    }

    // Agregar el contacto a la "base de datos"
    contactos.push(nuevoContacto.toJSON());

    res.status(201).json({
      success: true,
      message: 'Contacto agregado exitosamente',
      contacto: nuevoContacto.toJSON()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al agregar el contacto'
    });
  }
};

module.exports = {
  obtenerContactos,
  agregarContacto
};
