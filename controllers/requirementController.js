const db = require('../models');

const Requirement = db.requirement;

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
    console.log(requirement)

}



// 2. get all requirements

const getAllRequirements = async (req, res) => {

    let requirements = await Requirement.findAll({})
    res.status(200).send(requirements)

}

// 3. get single requirement

const getOneRequirement = async (req, res) => {

    let id = req.params.id
    let requirement = await Requirement.findOne({ where: { id: id }})
    res.status(200).send(requirement)

}

// 4. update requirement

const updateRequirement = async (req, res) => {

    let id = req.params.id

    const requirement = await Requirement.update(req.body, { where: { id: id }})

    res.status(200).send(requirement)
   

}

// 5. delete requirement by id

const deleteRequirement = async (req, res) => {

    let id = req.params.id
    
    await Requirement.destroy({ where: { id: id }} )

    res.status(200).send('Requirement is deleted !')

}

// 6. get published requirements

const getPublishedRequirements = async (req, res) => {

    const requirements =  await Requirement.findAll({ where: { isActive: true }})

    res.status(200).send(requirements)

}

module.exports = {addRequirement, getAllRequirements, getOneRequirement, updateRequirement, deleteRequirement, getPublishedRequirements}