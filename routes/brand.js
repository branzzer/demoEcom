const { Router } = require('express');
const { addNewBrand, getAllBrands, deleteBrandById, updateBrandById, getBrandById } = require('../controller/brand');

const router = Router();

router.post('/', addNewBrand)
router.get('/', getAllBrands)
router.get('/:id', getBrandById)
router.delete('/:id', deleteBrandById)
router.patch('/:id', updateBrandById)


module.exports = router