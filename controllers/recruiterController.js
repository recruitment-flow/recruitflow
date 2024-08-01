const db = require('../models');

const Recruiter = db.recruiter;

const addRecruiter = async (req, res) => {

    let info = {
        recruiter_name: req.body.recruiter_name,
        leadId: req.body.leadId,
        isActive: req.body.isActive        
    }

    const recruiter = await Recruiter.create(info)
    res.status(200).send(recruiter)
    console.log(recruiter)

}



// 2. get all recruiters

const getAllRecruiters = async (req, res) => {

    let recruiters = await Recruiter.findAll({})
    res.status(200).send(recruiters)

}

// 3. get single recruiter

const getOneRecruiter = async (req, res) => {

    let id = req.params.id
    let recruiter = await Recruiter.findOne({ where: { id: id }})
    res.status(200).send(recruiter)

}

// 4. update recruiter

const updateRecruiter = async (req, res) => {

    let id = req.params.id

    const recruiter = await Recruiter.update(req.body, { where: { id: id }})

    res.status(200).send(recruiter)
   

}

// 5. delete recruiter by id

const deleteRecruiter = async (req, res) => {

    let id = req.params.id
    
    await Recruiter.destroy({ where: { id: id }} )

    res.status(200).send('Recruiter is deleted !')

}

// 6. get published recruiters

const getPublishedRecruiters = async (req, res) => {

    const recruiters =  await Recruiter.findAll({ where: { isActive: true }})

    res.status(200).send(recruiters)

}

module.exports = {addRecruiter, getAllRecruiters, getOneRecruiter, updateRecruiter, deleteRecruiter, getPublishedRecruiters}