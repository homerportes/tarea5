const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config/config');
const errorHandler = require('./middleware/errorHandler');

// Importar rutas
const agendaRoutes = require('./routes/agenda.routes');

// Crear aplicación Express
const app = express();

// Configuración de middlewares de seguridad y utilidades
app.use(helmet()); // Seguridad HTTP headers
app.use(cors({ origin: config.corsOrigin })); // Habilitar CORS
app.use(morgan('dev')); // Logger de peticiones HTTP
app.use(express.json()); // Parser de JSON
app.use(express.urlencoded({ extended: true })); // Parser de URL-encoded

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API de Agenda - Tarea 5',
    version: '1.0.0',
    endpoints: {
      listar: 'GET /agenda',
      agregar: 'POST /agenda'
    }
  });
});

// Configurar rutas de la agenda
app.use('/agenda', agendaRoutes);

// Ruta 404 - No encontrada
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Ruta no encontrada',
    path: req.path
  });
});

// Middleware de manejo de errores (debe ir al final)
app.use(errorHandler);

// Iniciar servidor
const PORT = config.port;
app.listen(PORT, () => {
  console.log('\n===========================================');
  console.log('🚀 API de Agenda - Servidor Iniciado');
  console.log('===========================================');
  console.log(`Modo: ${config.env}`);
  console.log(`Puerto: ${PORT}`);
  console.log(`URL Base: http://localhost:${PORT}`);
  console.log('\n📍 Endpoints disponibles:');
  console.log(`  GET  http://localhost:${PORT}/agenda`);
  console.log(`       → Listar todos los contactos`);
  console.log(`  POST http://localhost:${PORT}/agenda`);
  console.log(`       → Agregar nuevo contacto`);
  console.log(`       Body: { nombre, apellido, telefono }`);
  console.log('===========================================\n');
});

module.exports = app;
