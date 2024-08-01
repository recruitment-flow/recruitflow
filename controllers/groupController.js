const db = require('../models')

const Group = db.group;
const addGroup = async (req, res) => {

    let info = {
        group_name: req.body.group_name,
        clientId: req.body.clientId,
        isActive: req.body.isActive        
    }
    const group = await Group.create(info)
    res.status(200).send(group)
    console.log(group)

}



// 2. get all groups

const getAllGroups = async (req, res) => {

    let groups = await Group.findAll({})
    res.status(200).send(groups)

}

// 3. get single group

const getOneGroup = async (req, res) => {

    let id = req.params.id
    let group = await Group.findOne({ where: { id: id }})
    res.status(200).send(group)

}

// 4. update Group

const updateGroup = async (req, res) => {

    let id = req.params.id

    const group = await Group.update(req.body, { where: { id: id }})

    res.status(200).send(group)
   

}

// 5. delete group by id

const deleteGroup = async (req, res) => {

    let id = req.params.id
    
    await Group.destroy({ where: { id: id }} )

    res.status(200).send('Group is deleted !')

}

// 6. get published group

const getPublishedGroups = async (req, res) => {

    const groups =  await Group.findAll({ where: { isActive: true }})

    res.status(200).send(groups)

}

module.exports = {addGroup, getAllGroups, getOneGroup, updateGroup, deleteGroup, getPublishedGroups}