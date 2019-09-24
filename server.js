const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')


const server = express()

server.use(morgan('short'))

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())

server.use(routes)

//User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' })

server.listen(3000);