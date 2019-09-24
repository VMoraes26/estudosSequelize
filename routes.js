const express = require('express')
const userController = require('./app/controllers/userController')

const routes = express.Router()

routes.get('/users', (req, res) => { }); //Listar todos
routes.post('/users', (req, res) => { }); // Criar
routes.get('/users/:id', (req, res) => { }); //Buscar
routes.put('/users/:id', (req, res) => { }); //Editar
routes.delete('/users/:id', (req, res) => { }); //Deletar

routes.post('/register', userController.register);

module.exports = routes