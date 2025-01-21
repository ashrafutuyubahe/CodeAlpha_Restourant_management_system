const express = require('express');
const orderService = require('../controllers/orderController');
const router = express.Router();


router.post('/orders', orderService.createOrder);
router.get('/orders', orderController.getOrders);
router.get('/orders/:id', orderController.getOrderById);
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;
