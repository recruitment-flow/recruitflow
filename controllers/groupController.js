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

    let groups = await Group.findAll({where : {isActive : true}})
    res.status(200).json(groups)

}

// 3. get single group

const getOneGroup = async (req, res) => {

    let id = req.params.id
    let group = await Group.findOne({ where: { id: id, isActive:true}})
    res.status(200).json(group)

}

// 4. update Group

const updateGroup = async (req, res) => {

    let id = req.params.id

    const group = await Group.update(req.body, { where: { id: id }})

    if (group[0] === 1) {
        res.status(200).json({ message: 'Group successfully updated !' })
    } else {
        res.status(404).json({ message: 'Group not found or no changes made !' })
    }
   
   

}

// 5. delete group by id

const deleteGroup = async (req, res) => {

    let id = req.params.id
    
    const group = await Group.update({ isActive: false }, { where: { id: id } });

     if (group[0] === 1) {
        res.status(200).json({ message: 'Group successfully soft deleted !' });
    } else {
        res.status(404).json({ message: 'Group not found or no changes made !' });
    }

}

// 6. get published group

const getPublishedGroups = async (req, res) => {

    const groups =  await Group.findAll({ where: { isActive: true }})

    res.status(200).json(groups)

}

module.exports = {addGroup, getAllGroups, getOneGroup, updateGroup, deleteGroup, getPublishedGroups}