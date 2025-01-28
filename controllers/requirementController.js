const db = require('../models');

const Requirement = db.requirement;

// 1. add requirement
const addRequirement = async (req, res) => {
    let info = {
        requirement_number: req.body.requirement_number,
        client_name: req.body.client_name,
        requirement_date: req.body.requirement_date,
        group_name: req.body.group_name,
        requirement: req.body.requirement,
        br_number: req.body.br_number,
        manager_name: req.body.manager_name,
        number_of_positions: req.body.number_of_positions,
        lead: req.body.lead,
        work_location: req.body.work_location,
        customer_name: req.body.customer_name,
        required_skills: req.body.required_skills,        
        recruiter: req.body.recruiter,
        sr_number: req.body.sr_number,
        type_of_sot: req.body.type_of_sot,
        rehash: req.body.rehash,
        createdby: req.body.createdby,
        isActive: req.body.isActive,        
    }

    const requirement = await Requirement.create(info)
    res.status(200).send(requirement)
}

// 2. get all requirements
const getAllRequirements = async (req, res) => {
    let requirements = await Requirement.findAll({ where: { isActive: true } })
    res.status(200).json(requirements)
}

// 3. get single requirement
const getOneRequirement = async (req, res) => {
    let id = req.params.id
    let requirement = await Requirement.findOne({ where: { id: id, isActive: true } })
    res.status(200).json(requirement)
}

// 4. update requirement
const updateRequirement = async (req, res) => {
    let id = req.params.id
    const requirement = await Requirement.update(req.body, { where: { id: id } })

    if (requirement[0] === 1) {
        res.status(200).json({ message: 'Requirement successfully updated!' })
    } else {
        res.status(404).json({ message: 'Requirement not found or no changes made!' })
    }
}

// 5. delete requirement by id
const deleteRequirement = async (req, res) => {
    let id = req.params.id
    const requirement = await Requirement.update({ isActive: false }, { where: { id: id } })

    if (requirement[0] === 1) {
        res.status(200).json({ message: 'Requirement successfully soft deleted!' })
    } else {
        res.status(404).json({ message: 'Requirement not found or no changes made!' })
    }
}

// 6. get published requirements
const getPublishedRequirements = async (req, res) => {
    const requirements = await Requirement.findAll({ where: { isActive: true } })
    res.status(200).json(requirements)
}

module.exports = { addRequirement, getAllRequirements, getOneRequirement, updateRequirement, deleteRequirement, getPublishedRequirements }