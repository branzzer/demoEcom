const { Router } = require('express');
const { createProduct, fetchAllProducts, fetchProductById, updateProduct, deleteProductById } = require('../controller/product');

const router = Router();


router.post('/', createProduct)
router.get('/', fetchAllProducts)
router.get('/:id', fetchProductById)
router.delete('/:id', deleteProductById)
router.patch('/updateProduct/:id', updateProduct)

module.exports = router;
