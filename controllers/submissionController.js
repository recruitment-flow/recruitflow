const db = require('../models');

const Submission = db.submission;

const addSubmission = async (req, res) => {

    let info = {
        submission_title: req.body.submission_title,
        requirementId: req.body.requirementId,
        isActive: req.body.isActive        
    }

    const submission = await Submission.create(info)
    res.status(200).send(submission)
    console.log(submission)

}



// 2. get all submissions

const getAllSubmissions = async (req, res) => {

    let submissions = await Submission.findAll({where :{isActive:true}})
    res.status(200).json(submissions)

}

// 3. get single submission

const getOneSubmission = async (req, res) => {

    let id = req.params.id
    let submission = await Submission.findOne({ where: { id: id, isActive:true }})
    res.status(200).send(submission)

}

// 4. update submission

const updateSubmission = async (req, res) => {

    let id = req.params.id

    const submission = await Submission.update(req.body, { where: { id: id }})

    if (submission[0] === 1) {
        res.status(200).json({ message: 'Submission successfully updated !' })
    } else {
        res.status(404).json({ message: 'Submission not found or no changes made !' })
    }

}

// 5. delete submission by id

const deleteSubmission = async (req, res) => {

    let id = req.params.id
    
    const submission = await Submission.update({ isActive: false }, { where: { id: id }})

    if (submission[0] === 1) {
        res.status(200).json({ message: 'Submission successfully soft deleted !' })
    } else {
        res.status(404).json({ message: 'Submission not found or no changes made !' })
    }

}

// 6. get published submissions

const getPublishedSubmissions = async (req, res) => {

    const submissions =  await Submission.findAll({ where: { isActive: true }})

    res.status(200).send(submissions)

}

module.exports = {addSubmission, getAllSubmissions, getOneSubmission, updateSubmission, deleteSubmission, getPublishedSubmissions}