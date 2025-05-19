const { poolPromise, sql } = require('../database/dbConfig');

exports.products = async () => {
    try {
        const pool = await poolPromise;

        const result = await pool.request().query("Select * from Products");

        console.log("Getting all products");
        return result.recordset;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.getProductByCategoriy = async (ID) => {
    try {
        const pool = await poolPromise;

        const result = await pool.request()
            .input("CategoryID", sql.Int, ID)
            .query("select * from products join Categories on Products.CategoryID = Categories.CategoryID where Categories.CategoryID = @CatagoryID");

        console.log("Getting products from category");
        return result.recordset;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

exports.setFavProduct = async (ID) => {
    try {
        const pool = await poolPromise;

        const result = await pool.request()
            .input("ProductID", sql.Int, ID)
            .query("UPDATE Products SET IsFavorite = 1 WHERE ProductID = @ProductID ");

        console.log("Set favorite products from products");
        return result.recordset;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

exports.resetFavProduct = async (ID) => {
    try {
        const pool = await poolPromise;

        const result = await pool.request()
            .input("ProductID", sql.Int, ID)
            .query("UPDATE Products SET IsFavorite = 0 WHERE ProductID = @ProductID ");

        console.log("Reset favorite products from products");
        return result.recordset;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

exports.getFavProduct = async () => {
    try {
        const pool = await poolPromise;

        const result = await pool.request().query("Select * from Products where IsFavorite = 1");

        console.log("Getting favorite products");
        return result.recordset;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}