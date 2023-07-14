const { Router } = require('express');
const { createOrder, getAllOrders, getOrder, deletAllOrderByUserId, deletOrderByOrderId, updateOrder } = require('../controller/order');


const router = Router();

router.post('/', createOrder)
router.get('/', getAllOrders)
router.get('/:id', getOrder)  // using  params
router.delete('/', deletAllOrderByUserId)
router.delete('/:id', deletOrderByOrderId)
router.patch('/:id', updateOrder)




module.exports = router;
