const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/users', userController.addUser)

router.get('/users', userController.getAllUsers)

router.get('/users/published', userController.getPublishedUsers)

router.get('/users/:id', userController.getOneUser)

router.put('/users/:id', userController.updateUser)

router.delete('/users/:id', userController.deleteUser)


module.exports = router