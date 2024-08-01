const router = require('express').Router();
const requirementController = require('../controllers/requirementController');


router.post('/requirements', requirementController.addRequirement)

router.get('/requirements', requirementController.getAllRequirements)

router.get('/requirements/published', requirementController.getPublishedRequirements)

router.get('/requirements/:id', requirementController.getOneRequirement)

router.put('/requirements/:id', requirementController.updateRequirement)

router.delete('/requirements/:id', requirementController.deleteRequirement)


module.exports = router
