const { User } = require('../models');

exports.findAll = async (req, res) => {
    const users = await User.findAll();
    if (!users) {
        res.status(404)
        res.send("Não encontrado")
        return
    }
    res.json(users);
};

exports.findById = async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
        res.status(404)
        res.send("Não encontrado")
        return
    }
    res.json(user);
};

exports.register = async (req, res) => {
    const user = await User.create(req.body);
    if (!user) {
        res.status(404)
        res.send("Não foi possível criar")
        return
    }
    res.json(user);
};

exports.update = async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
        res.status(404)
        res.send("Não foi possível atualizar")
        return
    }
    user.update({
        name: req.body.name
    })
    res.json(user);
};

exports.delete = async (req, res) => {
    const user = await User.destroy({ where: { id: req.params.id } });
    if (user == 0) {
        res.status(404)
        res.send("Usuario não existe")
        return
    }
    res.json(user);
};

