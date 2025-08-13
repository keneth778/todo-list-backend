const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'bf6q7ymz5e1zfupiinxq-mysql.services.clever-cloud.com',
  user: 'udk2thr0j1lnyiwj',
  password: 'KF6Vk8eQavfVTunXJMCd',
  database: 'bf6q7ymz5e1zfupiinxq'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
