const express = require('express');
const sql = require('mssql');
const dbConfig = require('./database/dbConfig');
const api = require('./api/api.js');

//Init server
const app = express();
const port = 3000;

//Init middleware
app.use(express.json());


//Import api
app.use('/api', api);

//Listen server'sPORT
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
