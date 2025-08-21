const mysql = require('mysql2/promise'); // 👈 importante: versión de promesas

const connection = mysql.createPool({
  host: 'bf6q7ymz5e1zfupiinxq-mysql.services.clever-cloud.com',
  user: 'udk2thr0j1lnyiwj',
  password: 'KF6Vk8eQavfVTunXJMCd',
  database: 'bf6q7ymz5e1zfupiinxq'
});

console.log('Conectado a la base de datos MySQL');

module.exports = connection;
