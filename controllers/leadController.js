const { where } = require('sequelize');
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

    let leads = await Lead.findAll({where: {isActive:true}})
    res.status(200).json(leads)

}

// 3. get single lead

const getOneLead = async (req, res) => {

    let id = req.params.id
    let lead = await Lead.findOne({ where: { id: id, isActive:true }})
    res.status(200).json(lead)

}

// 4. update Lead

const updateLead = async (req, res) => {
    let id = req.params.id

    const lead = await Lead.update(req.body, { where: { id: id }})

    if (lead[0] === 1) {
        res.status(200).json({ message: 'Lead successfully updated !' })
    } else {
        res.status(404).json({ message: 'Lead not found or no changes made !' })
    }
}

// 5. delete lead by id

const deleteLead = async (req, res) => {
    let id = req.params.id
    
    const lead = await Lead.update({ isActive: false }, { where: { id: id } });

    if (lead[0] === 1) {
        res.status(200).json({ message: 'Lead successfully soft deleted !' });
    } else {
        res.status(404).json({ message: 'Lead not found or no changes made !' });
    }
}

// 6. get published lead

const getPublishedLeads = async (req, res) => {

    const leads =  await Lead.findAll({ where: { isActive: true }})

    res.status(200).json(leads)

}

module.exports = {addLead, getAllLeads, getOneLead, updateLead, deleteLead, getPublishedLeads}