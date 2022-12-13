const express = require('express');
const ruta = express.Router();
const cpedido= require('../Controllers/pedido');


ruta.get('/listar',cpedido.listar);
ruta.get('/listarp',cpedido.listarp);
ruta.post('/modificar',cpedido.modificar);
ruta.post('/procesar',cpedido.procesar);
ruta.post('/aceptar',cpedido.aceptar);
ruta.post('/rechazar',cpedido.rechazar);
ruta.post('/agregar',cpedido.agregar);
ruta.post('/borrar',cpedido.borrar);
module.exports=ruta;