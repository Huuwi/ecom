require('dotenv').config();
const sql = require('mssql');

const dbUser = process.env.dbUser;
const dbPassword = process.env.dbPassword;
const db = process.env.db;
const host = process.env.host;

// console.log('dbUser:', dbUser);
// console.log('dbPassword:', dbPassword);
// console.log('db:', db);
// console.log('host:', host);

const config = {
    user: dbUser,        
    password: dbPassword,
    server: host,       
    database: db,   
    options: {
        encrypt: false,        
        trustServerCertificate: true
    }
};

module.exports = config;

