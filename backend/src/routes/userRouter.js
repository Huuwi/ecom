const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);

router.delete('/delUser', userController.delUser);

module.exports = router;
