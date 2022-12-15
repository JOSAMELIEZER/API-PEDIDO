const mnota=require('../modelos/nota');
module.exports ={
    listar: (req, res) => {
        const datos=req.body;
        mnota.listar(datos,(err, results) => {
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