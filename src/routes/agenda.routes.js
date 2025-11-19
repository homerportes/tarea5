const express = require('express');
const router = express.Router();
const { obtenerContactos, agregarContacto } = require('../controllers/agenda.controller');
const { validateContacto } = require('../middleware/validateRequest');

/**
 * @route   GET /agenda
 * @desc    Obtener todos los contactos de la agenda
 * @access  Public
 */
router.get('/', obtenerContactos);

/**
 * @route   POST /agenda
 * @desc    Agregar un nuevo contacto a la agenda
 * @access  Public
 * @body    { nombre: string, apellido: string, telefono: string }
 */
router.post('/', validateContacto, agregarContacto);

module.exports = router;
