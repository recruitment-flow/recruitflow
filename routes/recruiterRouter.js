const router = require('express').Router();
const recruiterController = require('../controllers/recruiterController');

router.post('/recruiters', recruiterController.addRecruiter)

router.get('/recruiters', recruiterController.getAllRecruiters)

router.get('/recruiters/published', recruiterController.getPublishedRecruiters)

router.get('/recruiters/:id', recruiterController.getOneRecruiter)

router.put('/recruiters/:id', recruiterController.updateRecruiter)

router.delete('/recruiters/:id', recruiterController.deleteRecruiter)



module.exports = router