const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);

router.get('/addUser', userController.addUser);

router.get('/delUser', userController.delUser);

module.exports = router;
