const express = require('express');
const ruta = express.Router();
const cplato= require('../Controllers/platos');
const auth = require('../auth');

ruta.post('/agregar',auth.verificatoken,cplato.agregar);
ruta.post('/modificar',auth.verificatoken,cplato.modificar);
ruta.get('/mostrar', cplato.listar);
ruta.post('/borrar',auth.verificatoken,cplato.borrar);
module.exports=ruta;