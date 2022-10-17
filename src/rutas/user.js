const { Router } = require('express');
const controlador = require('../controlador/user.js');


const router = Router()

router.get('/html-onwire', controlador.main)

router.post('/html-onwire', controlador.addUser)

router.get('/data-onwire', controlador.main2)

router.post('/data-onwire', controlador.addUser2)

router.get('/singletonTest', controlador.singleton)

module.exports = router;