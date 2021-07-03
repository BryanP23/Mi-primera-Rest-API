const {Router} = require ('express');
const router = Router();

router.get('/test', (req, res)=>{
    const data = {
        "name": "bryan",
        "wbsite": "david2315@hotmail.com"

    };
    res.json(data);
});

module.exports = router;
