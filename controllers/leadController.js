const db = require('../models');

const Lead = db.lead;

const addLead = async (req, res) => {

    let info = {
        lead_name: req.body.lead_name,
        managerId: req.body.managerId,
        isActive: req.body.isActive        
    }

    const lead = await Lead.create(info)
    res.status(200).send(lead)
    console.log(lead)

}



// 2. get all leads

const getAllLeads = async (req, res) => {

    let leads = await Lead.findAll({})
    res.status(200).send(leads)

}

// 3. get single lead

const getOneLead = async (req, res) => {

    let id = req.params.id
    let lead = await Lead.findOne({ where: { id: id }})
    res.status(200).send(lead)

}

// 4. update Lead

const updateLead = async (req, res) => {

    let id = req.params.id

    const lead = await Lead.update(req.body, { where: { id: id }})

    res.status(200).send(lead)
   

}

// 5. delete lead by id

const deleteLead = async (req, res) => {

    let id = req.params.id
    
    await Lead.destroy({ where: { id: id }} )

    res.status(200).send('Lead is deleted !')

}

// 6. get published lead

const getPublishedLeads = async (req, res) => {

    const leads =  await Lead.findAll({ where: { isActive: true }})

    res.status(200).send(leads)

}

module.exports = {addLead, getAllLeads, getOneLead, updateLead, deleteLead, getPublishedLeads}