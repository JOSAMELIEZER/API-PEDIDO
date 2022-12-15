const coneccion= require('../basedatos');

module.exports ={
    listar: (datos,callBack) => {
        coneccion.query(
            'SELECT PED.*,NTA.*,USR.*,PLA.* FROM notas NTA INNER JOIN pedidos PED ON NTA.pedido_id=PED.id INNER JOIN usuarios USR ON PED.user_id=USR.id INNER JOIN platos PLA ON PED.plato_id= PLA.id where NTA.pedido_id=167',
            [datos.id],
            (error, results) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },
}