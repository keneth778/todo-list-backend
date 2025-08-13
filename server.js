const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

const getTablas = require ('./routers/get/obtenerTablas');
app.use(getTablas)

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
