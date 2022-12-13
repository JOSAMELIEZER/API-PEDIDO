const express = require('express');
const ruta = express.Router();
const cplato= require('../Controllers/platos');
const auth = require('../auth');

ruta.post('/agregar',cplato.agregar);
ruta.post('/modificar',cplato.modificar);
ruta.get('/mostrar', cplato.listar);
ruta.post('/borrar',cplato.borrar);
module.exports=ruta;