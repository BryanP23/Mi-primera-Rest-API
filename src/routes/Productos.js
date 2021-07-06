const { Router} = require ('express');
const router = Router();
const _ = require ('underscore');
const productos = require('../ejemplo.json');

router.get ('/', (req, res) => {
 res.json(productos);
});

router.post('/', (req, res)=> {
    const { platillo, precio, descripción } = req.body;
    if ( platillo && precio && descripción) {
        const id = productos.length +1;
        const newProducto = { ...req.body, id};
        console.log(newProducto);
        productos.push(newProducto);
        res.json(productos);
    } else {
        res.send('Peticion erronea, falta un dato!');
    }

});

router.put ('/:id', (req,res) =>{
    const {id} = req.params;
    const { platillo, precio, descripción } = req.body;
    if ( platillo && precio && descripción) {
        _.each(productos, (producto, i) => {
            if (producto.id == id) {
                producto.platillo = platillo;
                producto.precio = precio;
                producto.descripción = descripción;
            }
        });
        res.json(productos);
    } else {
            res.status(500).json({error: 'Hubo un error'});
        }
    
});


router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    _.each(productos, (producto, i) => {
    if (producto.id == id) {
        productos.splice(i,1);
        } 
    });
    res.send(productos);
});

module.exports = router;