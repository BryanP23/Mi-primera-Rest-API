const { Router} = require ('express');
const router = Router();

router.get ('./Productos', (req, res) => {
res.send('Productos');
});

module.exports = router;