const mpedido=require('../modelos/pedido');
module.exports ={
    modificar: (req, res) => {
        const datos=req.body;
        mpedido.modificar(datos,(err,result)=>{
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
        mpedido.borrar(body.id, (err, results) => {
            if (err) return res.status(500).send("Error en la Base de Datos");
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    agregar: (req, res) => {
        const body = req.body;
        mpedido.agregar(body, (err, results) => {
            if (err) return res.status(500).send("Error en la Base de Datos");
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    tiket: (req, res) => {
        const body = req.body;
        mpedido.tiket(body, (err, results) => {
            if (err) return res.status(500).send("Error en la Base de Datos");
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    listar : (req,res) => {
        const datos=req.body;
        mpedido.listar(datos,(err,results)=>{
            if (err) {
                console(err);
                return;
            }
            return res.json({
                success :1,
                data:results
            })
        })
    },
    listarp : (req,res) => {
        mpedido.listarp((err,results)=>{
            if (err) {
                console(err);
                return;
            }
            return res.json({
                success :1,
                data:results
            })
        })
    },
    procesar: (req, res) => {
        const datos=req.body;
        mpedido.procesar(datos,(err,result)=>{
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
    aceptar: (req, res) => {
        const datos=req.body;
        mpedido.aceptar(datos,(err,result)=>{
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
    rechazar: (req, res) => {
        const datos=req.body;
        mpedido.rechazar(datos,(err,result)=>{
            if (err){
                console.log(err);
                return err;
            }
            return res.json({
                success:1,
                data:result
            })
        })
    }
}