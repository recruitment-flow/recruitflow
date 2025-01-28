const db = require('../models');

const User = db.user;

const addUser = async (req, res) => {

    let info = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        isActive: req.body.isActive        
    }

    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)

}



// 2. get all users

const getAllUsers = async (req, res) => {

    let users = await User.findAll({where: {isActive:true}})
    res.status(200).json(users)

}

// 3. get single user

const getOneUser = async (req, res) => {

    let id = req.params.id
    let user = await User.findOne({ where: { id: id, isActive:true }})
    res.status(200).json(user)

}

// 4. update user

const updateUser = async (req, res) => {

    let id = req.params.id

    const user = await User.update(req.body, { where: { id: id }})

    if (user[0] === 1) {
        res.status(200).json({ message: 'user successfully updated !' });
    } else {
        res.status(404).json({ message: 'user not found or no changes made !' });
    }
}

// 5. delete user by id

const deleteUser = async (req, res) => {

    let id = req.params.id
    
    const user = await User.update({ isActive: false }, { where: { id: id } })

    if (user[0] === 1) {
        res.status(200).json({ message: 'user successfully soft deleted !' });
    } else {
        res.status(404).json({ message: 'user not found or no changes made !' });
    }

}

// 6. get published users

const getPublishedUsers = async (req, res) => {

    const users =  await User.findAll({ where: { isActive: true }})

    res.status(200).json(users)

}

module.exports = {addUser, getAllUsers, getOneUser, updateUser, deleteUser, getPublishedUsers}