const coneccion= require('../basedatos');

module.exports ={
    modificar:(datos,callBack)=>{
        coneccion.query(
            'UPDATE PEDIDOS set cantidad=?,total=?,fecha_envio=? where id=?',
            [datos.cantidad,datos.total,datos.fecha_envio,datos.id],
            (error, results) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },
    borrar: (id,callBack) => {
        coneccion.query(
            'delete from pedidos where id=?',
            [id],
            (error, results,fields) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },
    agregar:(datos,callBack) =>{
        coneccion.query(
            'INSERT INTO PEDIDOS (cantidad,estado,total,user_id,plato_id) values (1,"carrito",?,?,?)',
            // 'INSERT INTO PEDIDOS (cantidad,estado,total,fecha_envio) values (?)',
            //SELECT PED.id,PLA.nom_plato,USR.nombre FROM pedidos PED INNER JOIN platos PLA ON PED.id=PLA.id INNER JOIN usuarios USR ON PED.id=USR.id
            // [datos.cantidad,datos.estado,datos.total,datos.fecha_envio],
             [datos.total,datos.user_id,datos.id],
            (error,results)=>{
                if(error) callBack(error);
                return callBack(null,results);
            }
        )
    },
    tiket:(datos,callBack) =>{
        coneccion.query(
            'INSERT INTO NOTAS (fecha,total,pedido_id) values (?,?,?)',
             [datos.fecha_envio,datos.total,datos.pedido_id],
            (error,results)=>{
                if(error) callBack(error);
                return callBack(null,results);
            }
        )
    },
    listar:(datos,callBack) =>{
        coneccion.query(
            'SELECT PED.*,PLA.nom_plato,PLA.precio FROM pedidos PED INNER JOIN platos PLA ON PED.plato_id=PLA.id INNER JOIN usuarios USR ON PED.user_id=USR.id where USR.id=?',
            //'SELECT PED.id,PLA.nom_plato,PLA.precio,USR.nombre,PED.fecha_envio,PED.fecha_pedido FROM pedidos PED INNER JOIN platos PLA ON PED.plato_id=PLA.id INNER JOIN usuarios USR ON PED.user_id=USR.id',
            [datos.id],
            (error,results)=>{
                if(error) callBack(error);
                return callBack(null,results);
            }
        )
    },
    listarp:(callBack) =>{
        coneccion.query(
            'SELECT PED.*,PLA.nom_plato,PLA.precio FROM pedidos PED INNER JOIN platos PLA ON PED.plato_id=PLA.id INNER JOIN usuarios USR ON PED.user_id=USR.id where PED.estado="aceptado"or PED.estado="rechazado" or PED.estado="pendiente"',
            //'SELECT PED.id,PLA.nom_plato,PLA.precio,USR.nombre,PED.fecha_envio,PED.fecha_pedido FROM pedidos PED INNER JOIN platos PLA ON PED.plato_id=PLA.id INNER JOIN usuarios USR ON PED.user_id=USR.id',
            
            (error,results)=>{
                if(error) callBack(error);
                return callBack(null,results);
            }
        )
    },
    procesar:(datos,callBack)=>{
        coneccion.query(
            'UPDATE PEDIDOS set estado="pendiente" where id=?',
            [datos.id],
            (error, results) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },
    aceptar:(datos,callBack)=>{
        coneccion.query(
            'UPDATE PEDIDOS set estado="aceptado" where id=?',
            [datos.id],
            (error, results) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    }
    ,
    rechazar:(datos,callBack)=>{
        coneccion.query(
            'UPDATE PEDIDOS set estado="rechazado" where id=?',
            [datos.id],
            (error, results) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    }
}