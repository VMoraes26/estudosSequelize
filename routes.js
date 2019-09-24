const express = require('express')
const userController = new require('./app/controllers/userController')

const routes = express.Router()

routes.get('/findAll', userController.findAll);

routes.get('/findById/:id', userController.findById);

routes.post('/register', userController.register);

routes.put('/update/:id', userController.update);

routes.delete('/delete/:id', userController.delete);

module.exports = routes