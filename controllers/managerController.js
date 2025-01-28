const { where } = require('sequelize');
const db = require('../models');

const Manager = db.manager;

const addManager = async (req, res) => {

    let info = {
        manager_name: req.body.manager_name,
        groupId: req.body.groupId,
        isActive: req.body.isActive
        
    }

    const manager = await Manager.create(info)
    res.status(200).send(manager)
    console.log(manager)

}



// 2. get all managers

const getAllManagers = async (req, res) => {

    let managers = await Manager.findAll({where: {isActive : true}})
    res.status(200).send(managers)

}

// 3. get single manager

const getOneManager = async (req, res) => {

    let id = req.params.id
    let manager = await Manager.findOne({ where: { id: id, isActive : true }})
    res.status(200).send(manager)

}

// 4. update Manager
const updateManager = async (req, res) => {
    let id = req.params.id
    const manager = await Manager.update(req.body, { where: { id: id }})

    if (manager[0] === 1) {
        res.status(200).json({ message: 'Manager successfully updated !' })
    } else {
        res.status(404).json({ message: 'Manager not found or no changes made !' })
    }
}

// 5. delete manager by id (soft delete)
const deleteManager = async (req, res) => {
    let id = req.params.id
    const manager = await Manager.update({ isActive: false }, { where: { id: id } });

    if (manager[0] === 1) {
        res.status(200).json({ message: 'Manager successfully soft deleted !' });
    } else {
        res.status(404).json({ message: 'Manager not found or no changes made !' });
    }
}

// 6. get published manager

const getPublishedManagers = async (req, res) => {

    const managers =  await Manager.findAll({ where: { isActive: true }})

    res.status(200).send(managers)

}

module.exports = {addManager, getAllManagers, getOneManager, updateManager, deleteManager, getPublishedManagers}