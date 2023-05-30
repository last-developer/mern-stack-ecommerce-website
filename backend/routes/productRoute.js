const express = require('express')
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');
const { isAuthenticatedUser } = require('../middleware/auth');

const router = express.Router();
// route to get all product
router.route('/products').get(getAllProducts);

// route to create a product
router.route('/product/new').post(isAuthenticatedUser, createProduct);

// route to update,delete and get details of a single product
router.route('/product/:id').put(isAuthenticatedUser, updateProduct)
    .delete(isAuthenticatedUser, deleteProduct)
    .get(isAuthenticatedUser, getProductDetails);


module.exports = router