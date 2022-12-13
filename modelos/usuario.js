const coneccion = require('../basedatos');
const crypto = require('crypto');

function sha256(string) {
    return crypto.createHash('sha256').update(string).digest('hex');
   }
   

module.exports = {
    modificar:(datos,callBack)=>{
        coneccion.query(
            'UPDATE USUARIOS set nombre=?,usuario=?,clave=?,email=?,rol_usuario=? where id=?',
            [datos.nombre,datos.usuario,sha256(datos.clave),datos.email,datos.rol_usuario,datos.id],
            (error, results) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },


    borrar: (id,callBack) => {
        coneccion.query(
            'delete from usuarios where id=?',
            [id],
            (error, results,fields) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },

    agregar:(datos,callBack)=>{
        coneccion.query(
            'INSERT INTO USUARIOS (nombre,usuario,clave,email,rol_usuario) values (?,?,?,?,?)',
            [datos.nombre,datos.usuario,sha256(datos.clave),datos.email,datos.rol_usuario],
            (error, results) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },

    listar: (callBack) => {
        coneccion.query(
            'select * from usuarios',
            (error, results) => {
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },
    verifica: (datos, callBack) => {
        coneccion.query(
            `select * from usuarios where usuario= ? and clave=?`,
            [datos.usuario, sha256(datos.clave)],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }


}