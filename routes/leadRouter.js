const router = require('express').Router();
const leadController = require('../controllers/leadController');

router.post('/leads', leadController.addLead)

router.get('/leads', leadController.getAllLeads)

router.get('/leads/published', leadController.getPublishedLeads)

router.get('/leads/:id', leadController.getOneLead)

router.put('/leads/:id', leadController.updateLead)

router.delete('/leads/:id', leadController.deleteLead)


module.exports = router
