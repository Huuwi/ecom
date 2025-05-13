const express = require('express');
const api = express.Router();
const userRouter = require('../routes/userRouter.js');
const authRouter = require('../routes/authRouter.js');

api.get('/', (req, res) => {
    const forwardedIp = req.headers['x-forwarded-for'] || req.ip
    res.status(200).json(
        {
            message: "your ip address : " + forwardedIp
        }
    )
});

api.get("/ping", (req, res) => {
    res.status(200).json({
        message: "ok from backend!"
    });
})

api.use('/user', userRouter);

api.use('/auth', authRouter);

module.exports = api;