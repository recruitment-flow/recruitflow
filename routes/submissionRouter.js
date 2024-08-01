const router = require('express').Router();
const submissionController = require('../controllers/submissionController');


router.post('/submissions', submissionController.addSubmission)

router.get('/submissions', submissionController.getAllSubmissions)

router.get('/submissions/published', submissionController.getPublishedSubmissions)

router.get('/submissions/:id', submissionController.getOneSubmission)

router.put('/submissions/:id', submissionController.updateSubmission)

router.delete('/submissions/:id', submissionController.deleteSubmission)



module.exports = router
