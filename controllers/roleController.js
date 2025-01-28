const db = require('../models');

const Role = db.role;


const addRole = async (req, res) => {

    let info = {
        role: req.body.role,
        userId: req.body.userId,
        isActive: req.body.isActive        
    }

    const role = await Role.create(info)
    res.status(200).send(role)
    console.log(role)

}



// 2. get all roles

const getAllRoles = async (req, res) => {

    let roles = await Role.findAll({where : {isActive:true}})
    res.status(200).json(roles)
}

// 3. get single role

const getOneRole = async (req, res) => {

    let id = req.params.id
    let role = await Role.findOne({ where: { id: id, isActive:true }})
    res.status(200).json(role)

}

// 4. update role

const updateRole = async (req, res) => {

    let id = req.params.id

    const role = await Role.update(req.body, { where: { id: id }})

    if (role[0] === 1) {
        res.status(200).json({ message: 'Role successfully updated !' });
    } else {
        res.status(404).json({ message: 'Role not found or no changes made !' });
    }
}

// 5. delete role by id

const deleteRole = async (req, res) => {

    let id = req.params.id   

    const role = await Role.update({ isActive: false }, { where: { id: id } });

    if (role[0] === 1) {
        res.status(200).json({ message: 'Role successfully soft deleted !' });
    } else {
        res.status(404).json({ message: 'Role not found or no changes made !' });
    }

}

// 6. get published roles

const getPublishedRoles = async (req, res) => {

    const roles =  await Role.findAll({ where: { isActive: true }})

    res.status(200).json(roles)

}

module.exports = {addRole, getAllRoles, getOneRole, updateRole, deleteRole, getPublishedRoles}