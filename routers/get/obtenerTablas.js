const db = require('../../config/db');
const express = require('express');
const router = express.Router();

// mi ruta get
router.get('/tablas', async (req, res) => {
  try {
    let [resultadoTablas] = await db.query('SHOW TABLES;');
    res.json(resultadoTablas);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Error al obtener las tablas" });
  }
});

module.exports = router;
