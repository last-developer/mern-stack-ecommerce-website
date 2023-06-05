const express = require('express')
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();
// route to get all product
router.route('/products').get(getAllProducts);

// route to create a product
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), createProduct);

// route to update,delete and get details of a single product
router.route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct)

router.route('/product/:id').get(isAuthenticatedUser, getProductDetails);

module.exports = router