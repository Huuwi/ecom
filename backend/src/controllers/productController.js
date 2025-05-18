const ProductModel = require('../model/productModel');

exports.products = async (req, res) => {
    try {
        const products = await ProductModel.products();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.productsOfCategory = async (req, res) => {
    try {
        const products = await ProductModel.getProductByCategoriy();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.setFav = async (req, res) => {
    try {
        const ID = req.body.ID;
        const favProducts = await ProductModel.setFavProduct(ID);
        res.json(favProducts);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.resetFav = async (req, res) => {
    try {
        const ID = req.body.ID;
        const favProducts = await ProductModel.resetFavProduct(ID);
        res.json(favProducts);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}