const Product = require('../models/productModel')
const ErrorHander = require('../utils/errorhander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

// create product --Admin route
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })
})

// get all products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    const products = await Product.find()

    res.status(200).json({
        success: true,
        products
    })
})

// update product --Admin route
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHander("product not found", 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,
        { new: true, runValidators: true, useFindAndModify: false })

    res.status(200).json({
        success: true,
        product
    })
})

// delete product --Admin route
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHander("product not found", 404))
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
})

// get single product details --Admin route
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHander("product not found", 404))
    }
    
    res.status(200).json({
        success: true,
        product
    })
})
