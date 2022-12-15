const express = require('express');
const ruta = express.Router();
const cpedido= require('../Controllers/pedido');
const auth = require('../auth');

ruta.post('/listar',auth.verificatoken,cpedido.listar);
ruta.get('/listarp',auth.verificatoken,cpedido.listarp);
ruta.post('/modificar',auth.verificatoken,cpedido.modificar);
ruta.post('/procesar',auth.verificatoken,cpedido.procesar);
ruta.post('/aceptar',auth.verificatoken,cpedido.aceptar);
ruta.post('/tiket',auth.verificatoken,cpedido.tiket);
ruta.post('/rechazar',auth.verificatoken,cpedido.rechazar);
ruta.post('/agregar',auth.verificatoken,cpedido.agregar);
ruta.post('/borrar',auth.verificatoken,cpedido.borrar);
module.exports=ruta;