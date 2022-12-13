const coneccion= require('../basedatos');

module.exports ={
    modificar:(datos,callBack)=>{
        coneccion.query(
            'UPDATE PLATOS set nom_plato=?,precio=?,desc_plato=?,foto=? where id=?',
            [datos.nom_plato,datos.precio,datos.desc_plato,datos.foto,datos.id],
            (error, results) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },
    borrar: (id,callBack) => {
        coneccion.query(
            'delete from platos where id=?',
            [id],
            (error, results,fields) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },
    agregar:(datos,callBack) =>{
        coneccion.query(
            'INSERT INTO PLATOS (nom_plato,precio,desc_plato,foto) values (?,?,?,?)',
            [datos.nom_plato,datos.precio,datos.desc_plato,datos.foto],
            (error,results)=>{
                if(error) callBack(error);
                return callBack(null,results);
            }
        )
    },
    listar: (callBack) => {
        coneccion.query(
            'select * from platos',
            (error, results) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },
}