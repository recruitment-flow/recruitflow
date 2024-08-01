const router = require('express').Router();
const managerController = require('../controllers/managerController');

router.post('/managers', managerController.addManager)

router.get('/managers', managerController.getAllManagers)

router.get('/managers/published', managerController.getPublishedManagers)

router.get('/managers/:id', managerController.getOneManager)

router.put('/managers/:id', managerController.updateManager)

router.delete('/managers/:id', managerController.deleteManager)


module.exports = router