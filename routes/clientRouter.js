const router = require('express').Router();
const clientController = require('../controllers/clientController');

router.post('/clients', clientController.addClient)

router.get('/clients', clientController.getAllClients)

router.get('/clients/published', clientController.getPublishedClients)

router.get('/clients/:id', clientController.getOneClient)

router.put('/clients/:id', clientController.updateClient)

router.delete('/clients/:id', clientController.deleteClient)


module.exports = router
