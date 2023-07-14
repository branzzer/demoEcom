const { Router } = require('express')
const { addNewCategory, getAllCategory, getCategoryById, deleteCategoryById, updateCategoryById, deleteCategoryByLabel } = require('../controller/category')


const router = Router()


router.post('/', addNewCategory)
router.get('/', getAllCategory)
router.get('/:id', getCategoryById)
router.delete('/:id', deleteCategoryById)
router.delete('/bylabel/:label', deleteCategoryByLabel)
router.patch('/:id', updateCategoryById)


module.exports = router