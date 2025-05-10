const { poolPromise, sql } = require('../database/dbConfig');

// Lay danh sach users
exports.getAllUsers = async () => {
    try {
        // Kết nối với database
        const pool = await poolPromise;

        // Thực hiện truy vấn
        const result = await pool.request().query('Select * from users')

        // Trả về kết quả
        return result.recordset;  // `recordset` chứa dữ liệu trả về từ truy vấn
    } catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    }
};

// Them 1 user moi
exports.addUser = async (user) => {
    try {
        // Kết nối với database
        const pool = await poolPromise;

        const { Username, PasswordHash, FullName, Email, Phone, Address, Role } = user;

        // Thực hiện truy vấn
        const result = await pool.request()
            .input('Username', sql.NVarChar, Username)
            .input('PasswordHash', sql.NVarChar, PasswordHash)
            .input('FullName', sql.NVarChar, FullName)
            .input('Email', sql.NVarChar, Email)
            .input('Phone', sql.NVarChar, Phone)
            .input('Address', sql.NVarChar, Address)
            .input('Role', sql.NVarChar, Role || 'Customer')
            .query(`
                INSERT INTO Users (Username, PasswordHash, FullName, Email, Phone, Address, Role)
                VALUES (@Username, @PasswordHash, @FullName, @Email, @Phone, @Address, @Role)
            `);

        // Trả về kết quả
        console.log('Inserting a user...');
        return result.recordset;
    } catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    }
};

// Xoa 1 user
exports.delUser = async (UserID) => {
    try {
        // Kết nối với database
        const pool = await poolPromise;
        
        console.log(UserID);

        // Thực hiện truy vấn
        const result = await pool.request()
            .input('UserID', sql.Int, UserID)
            .query(`
                DELETE FROM Users WHERE UserID = @UserID;
            `);

        // Trả về kết quả
        console.log('Deleting a user...');
        return result;
    } catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    }
};