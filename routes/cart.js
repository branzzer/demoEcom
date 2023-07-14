const { Router } = require('express');
const { addNewToCart, getCartByUser, getCartByUserQuery, getCartByUserParms, deletCartSingleItem, updateCartItem } = require('../controller/cart');

const router = Router();

router.post('/', addNewToCart)
router.get('/', getCartByUserQuery)  // using query
router.get('/:id', getCartByUserParms)  // using  params
router.delete('/:id', deletCartSingleItem)     // using parms
router.patch('/:id', updateCartItem)




module.exports = router;


