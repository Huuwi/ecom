const UserModel = require('../model/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.delUser = async (req, res) => {
    try {
        const { UserID } = req.body;
        const del = await UserModel.delUser(UserID);
        res.json(del);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

