const express = require('express');
const ruta = express.Router();
const cnota= require('../Controllers/nota');
const auth = require('../auth');

ruta.post('/mostrar', cnota.listar);
module.exports=ruta;