const mplato=require('../modelos/plato');
module.exports ={
    modificar: (req, res) => {
        const datos=req.body;
        const myfile = req.files.file;
        console.log(myfile);
        var ff = new Date();
        var d = ff.getDate();
        var m = ff.getMonth();
        var a = ff.getFullYear();
        var h = ff.getHours();
        var i = ff.getMinutes();
        var s = ff.getSeconds();
        myfile.name = "foto"+a+m+d+h+i+s+ myfile.name.substr(-4);
        
        datos.foto=myfile.name;
        myfile.mv(`H:/FNI/sem 2-2022/inf 3911/proyecto web inf 38911/pro-web/src/assets/${myfile.name}`,function(err){
            if (err) {
                console.log(err);
                return res.status(500).send({msg:"Error en envio de archivo"})
            }
        })
        mplato.modificar(datos,(err,result)=>{
            if (err){
                console.log(err);
                return err;
            }
            return res.json({
                success:1,
                data:result
            })
        })
    },
    borrar: (req, res) => {
        const body = req.body;
        mplato.borrar(body.id, (err, results) => {
            if (err) return res.status(500).send("Error en la Base de Datos");
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    agregar : (req,res) => {
        const datos=req.body;
        const myfile = req.files.file;
        console.log(myfile);
        var ff = new Date();
        var d = ff.getDate();
        var m = ff.getMonth();
        var a = ff.getFullYear();
        var h = ff.getHours();
        var i = ff.getMinutes();
        var s = ff.getSeconds();
        myfile.name = "foto"+a+m+d+h+i+s+ myfile.name.substr(-4);
        
        datos.foto=myfile.name;
        myfile.mv(`H:/FNI/sem 2-2022/inf 3911/proyecto web inf 38911/pro-web/src/assets/${myfile.name}`,function(err){
            if (err) {
                console.log(err);
                return res.status(500).send({msg:"Error en envio de archivo"})
            }
        })
        mplato.agregar(datos,(err,result)=>{
            if (err){
                console.log(err);
                return err;
            }
            return res.json({
                success:1,
                data:result
            })
        })
    },
    listar: (req, res) => {
        mplato.listar((err, results) => {
            if (err) {
                console(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
}