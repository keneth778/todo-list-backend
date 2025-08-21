const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

// Rutas
const getTablas = require('./routers/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routers/get/obtenerTareas');
app.use(getTareas);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
