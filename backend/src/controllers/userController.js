const UserModel = require('../model/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addUser = async (req, res) => {
    try {
        const users = await UserModel.addUser();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delUser = async (req, res) => {
    try {
        const users = await UserModel.delUser();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};