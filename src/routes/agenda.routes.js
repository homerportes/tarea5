const express = require('express');
const router = express.Router();
const { obtenerContactos, agregarContacto } = require('../controllers/agenda.controller');
const { validateContacto } = require('../middleware/validateRequest');

router.get('/', obtenerContactos);
router.post('/', validateContacto, agregarContacto);
router.get('/', obtenerContactos);
router.post('/', validateContacto, agregarContacto);
module.exports = router;
