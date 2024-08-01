const router = require('express').Router();
const roleController = require('../controllers/roleController');


router.post('/roles', roleController.addRole)

router.get('/roles', roleController.getAllRoles)

router.get('/roles/published', roleController.getPublishedRoles)

router.get('/roles/:id', roleController.getOneRole)

router.put('/roles/:id', roleController.updateRole)

router.delete('/roles/:id', roleController.deleteRole)


module.exports = router
