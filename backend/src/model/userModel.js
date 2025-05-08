const db = require('../database/dbConfig');
const sql = require('mssql');

// Lay danh sach users
exports.getAllUsers = async () => {
    try {
        // Kết nối với database
        await sql.connect(db);

        // Thực hiện truy vấn
        const result = await sql.query('SELECT * FROM users');

        // Trả về kết quả
        return result.recordset;  // `recordset` chứa dữ liệu trả về từ truy vấn
    } catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    } finally {
        // Đảm bảo kết nối được đóng sau khi truy vấn
        sql.close();
    }
};

// Them 1 user moi
exports.addUser = async () => {
    try {
        // Kết nối với database
        await sql.connect(db);

        // Thực hiện truy vấn
        const result = await sql.query(`
            INSERT INTO Users (Username, PasswordHash, FullName, Email, Phone, Address, Role)
            VALUES (N'john_doe2', N'$2b$10$abc123xyz456hashedpassword', N'John Doe', N'john.doe@example.com', N'0123456789', N'123 Main Street', N'Customer');
        `);

        // Trả về kết quả
        console.log('Inserting a user...');
        return result;
    } catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    } finally {
        // Đảm bảo kết nối được đóng sau khi truy vấn
        sql.close();
    }
};

// Xoa 1 user
exports.delUser = async () => {
    try {
        // Kết nối với database
        await sql.connect(db);

        // Thực hiện truy vấn
        const result = await sql.query('DELETE FROM Users WHERE UserID = 8');

        // Trả về kết quả
        console.log('Deleting a user...');
        return result;
    } catch (err) {
        console.error('Error querying database:', err);
        throw err;  // Ném lỗi ra nếu có
    } finally {
        // Đảm bảo kết nối được đóng sau khi truy vấn
        sql.close();
    }
};