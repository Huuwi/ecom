const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);

router.get('/user', userController.getUser);

router.delete('/delUser', userController.delUser);

router.post('/changeUserInfor', userController.changeInfor);

router.post('/changeAccountInfor', userController.changeAccountInfor);

router.post('/changeAddress', userController.changeAddress);


module.exports = router;
