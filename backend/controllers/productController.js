const Product = require('../models/productModel')

// create product --Admin route
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })
}

// get all products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find()

    res.status(200).json({
        success: true,
        products
    })
}

// update product --Admin route
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,
        { new: true, runValidators: true, useFindAndModify: false })

    res.status(200).json({
        success: true,
        product
    })
}

// delete product --Admin route
exports.deleteProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "product not found"
        })
    }
    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
}

// get single product details --Admin route
exports.getProductDetails = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "product not found"
        })
    }

    res.status(200).json({
        success: true,
        product
    })
}
