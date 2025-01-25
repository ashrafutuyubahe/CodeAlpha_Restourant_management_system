const express = require('express');
const router = express.Router();
const orderService = require('../Services/orderService');
const {checkCustomer} = require("../Middleware/authMiddleware");
const {checkAdmin} = require("../Middleware/authMiddleware");

router.post("/orders", checkCustomer,orderService.placeOrder); 
router.get("/orders/:id", checkCustomer,orderService.getOrderDetails); 
router.post('/orders', checkAdmin,orderService.createOrder);
router.get('/orders', checkCustomer,orderService.getOrders);
router.get('/orders/:id', checkCustomer,orderService.getOrderById);
router.put('/orders/:id', checkAdmin,orderService.updateOrder);
router.delete('/orders/:id', checkAdmin,orderService.deleteOrder);

module.exports = router;
