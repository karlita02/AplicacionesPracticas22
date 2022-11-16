const { Router } = require('express');

const { 


insertarEspejo,
parquerInsertar
} = require('../controllers/parquear');




const router = Router(); 


router.post('/',  parquerInsertar)

router.get('/', insertarEspejo )


module.exports= router;