const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 
const getdogsidraza = require('./getdogsidraza.js');
const getdogs = require('./getdogs.js');
const postdogs = require('./postdogs.js');
const gettemperaments = require('./gettemperaments.js');
const postTemperaments = require('./postTemperaments.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', getdogs);
router.get('/dogs/:id', getdogsidraza);
router.get('/temperaments', gettemperaments);
router.post('/dogs', postdogs);
router.post('/temperaments', postTemperaments);
module.exports = router;
