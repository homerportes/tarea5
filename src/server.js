const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config/config');
const errorHandler = require('./middleware/errorHandler');

const agendaRoutes = require('./routes/agenda.routes');

app.use(helmet());
const agendaRoutes = require('./routes/agenda.routes');
const app = express();
app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
app.use('/agenda', agendaRoutes);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Ruta no encontrada',
    path: req.path
  });
});
app.use(errorHandler);
const PORT = config.port;
app.listen(PORT, () => {
  console.log('\n===========================================');
  console.log('API de Agenda - Servidor Iniciado');
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
  console.log(`Puerto: ${PORT}`);
