const { User } = require('../models');

exports.register = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user); 
};