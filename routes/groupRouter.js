const router = require('express').Router();
const groupController = require('../controllers/groupController');


router.post('/groups', groupController.addGroup)

router.get('/groups', groupController.getAllGroups)

router.get('/groups/published', groupController.getPublishedGroups)

router.get('/groups/:id', groupController.getOneGroup)

router.put('/groups/:id', groupController.updateGroup)

router.delete('/groups/:id', groupController.deleteGroup)


module.exports = router
