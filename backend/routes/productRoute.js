const express=require('express')
const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController')

const router=express.Router();
// route to get all product
router.route('/products').get(getAllProducts);

// route to create a product
router.route('/product/new').post(createProduct);

// route to update,delete and get details of a single product
router.route('/product/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails);


module.exports=router