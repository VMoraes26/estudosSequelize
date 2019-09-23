const express = require('express')
const morgan = require('morgan')
var bodyParser = require('body-parser')

const { User } = require('./app/models');

const app = express()

app.use(morgan('short'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' })

app.get('/users', (req, res) => {}); //Listar todos
app.post('/users', (req, res) => {}); // Criar
app.get('/users/:id', (req, res) => {}); //Buscar
app.put('/users/:id', (req, res) => {}); //Editar
app.delete('/users/:id', (req, res) => {}); //Deletar

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.listen(3000);