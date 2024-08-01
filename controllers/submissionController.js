const db = require('../models');

const Submissions = db.submission;

const addSubmission = async (req, res) => {

    let info = {
        submission_title: req.body.submission_title,
        requirementId: req.body.requirementId,
        isActive: req.body.isActive        
    }

    const submission = await Submissions.create(info)
    res.status(200).send(submission)
    console.log(submission)

}



// 2. get all submissions

const getAllSubmissions = async (req, res) => {

    let submissions = await Submissions.findAll({})
    res.status(200).send(submissions)

}

// 3. get single submission

const getOneSubmission = async (req, res) => {

    let id = req.params.id
    let submission = await Submissions.findOne({ where: { id: id }})
    res.status(200).send(submission)

}

// 4. update submission

const updateSubmission = async (req, res) => {

    let id = req.params.id

    const submission = await Submissions.update(req.body, { where: { id: id }})

    res.status(200).send(submission)
   

}

// 5. delete submission by id

const deleteSubmission = async (req, res) => {

    let id = req.params.id
    
    await Submissions.destroy({ where: { id: id }} )

    res.status(200).send('Submission is deleted !')

}

// 6. get published submissions

const getPublishedSubmissions = async (req, res) => {

    const submissions =  await Submissions.findAll({ where: { isActive: true }})

    res.status(200).send(submissions)

}

module.exports = {addSubmission, getAllSubmissions, getOneSubmission, updateSubmission, deleteSubmission, getPublishedSubmissions}