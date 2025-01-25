const express = require('express');
const orderService = require('../Services/orderService');
const router = express.Router();


router.post("/orders", orderService.placeOrder); 
router.get("/orders/:id", orderService.getOrderDetails); 
router.post('/orders', orderService.createOrder);
router.get('/orders', orderService.getOrders);
router.get('/orders/:id', orderService.getOrderById);
router.put('/orders/:id', orderService.updateOrder);
router.delete('/orders/:id', orderService.deleteOrder);

module.exports = router;
