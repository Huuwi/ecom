const UserModel = require('../model/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const ID = req.cookies.ID;
        const users = await UserModel.getUser(ID);
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

exports.changeInfor = async (req, res) => {
    try {
        const newInfor = req.body;
        const UserID = req.cookies.ID;
        // console.log(UserID);

        const change = await UserModel.changeInfor(newInfor, UserID);
        res.json(change);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.changeAccountInfor = async (req, res) => {
    try {
        const newInfor = req.body;
        const UserID = req.cookies.ID;
        // console.log(UserID);
        // console.log(newInfor);

        const change = await UserModel.changeAccountInfor(newInfor, UserID);
        res.json(change);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.changeAddress = async (req, res) => {
    try {
        const newInfor = req.body;
        const UserID = req.cookies.ID;
        // console.log(UserID);
        // console.log(newInfor);

        const change = await UserModel.changeAddress(newInfor, UserID);
        res.json(change);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

